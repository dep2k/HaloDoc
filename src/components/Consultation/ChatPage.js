import React from "react";
import {
  View,
  Alert,
  StyleSheet,
  ActivityIndicator
} from "react-native";

import {
  GiftedChat,
  Bubble,
  messageIdGenerator
} from "react-native-gifted-chat";
import { NavBar } from "../Reusable/NavBar";
import DropDown from "../PetRegistration/DropDown"
import { I18n } from "aws-amplify";
import {
  SubscriptionToNewMessage,
  CreateMessage,
  GetMessages,
  ConfirmPayment,
  EndConversation,
  SubscribeForEndOfConsultation
} from "../../Queries/Chatapi";
import Amplify, { API, graphqlOperation, Cache } from "aws-amplify";

class ChatPage extends React.Component {

  constructor(props) {
    super(props);

    // Set State
    this.state = {
      messages: [],
      modalVisible: false,
      animating: false
    };

    // Fetch data passed in Navigation
    const { navigation } = this.props;
    this.conversationId = navigation.getParam("chatId");
    this.myUser = navigation.getParam("user");
    this.consulation = navigation.getParam('consultation');
    this.consultationStatus = this.consulation.conversationStatus;
    this.pet = this.consulation.pet;
    this.questions = this.consulation.questionsAndAnswers;
    //logs
    console.log(this.myUser);
    console.log(this.consulation);
    console.log(this.consultationStatus);
   
    // if(this.myUser.userType.toLowerCase() == "doctor") {
    //   this.pet = navigation.getParam('petInfo');
    //   this.questions = navigation.getParam('questions');
    //   console.log(this.pet);
    //   console.log(this.questions);
    // } else {
  
    // }


    // Bind Methods
    this.backButtonClick = this.backButtonClick.bind(this);
    this.showQuestionAnsewrs = this.showQuestionAnsewrs.bind(this);
        // ONly the user need to subscribe for End of Consultaton
    if (this.consultationStatus.toLowerCase() == 'ongoing'){
      this.subscribeForEndOfConsultation = this.subscribeForEndOfConsultation.bind(this);
    }
  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  rightButtonClick() {
    console.log("Right Button click");
    this.showDropDown();
  }

  showDropDown(){
   // console.log("ShowDropDown Function Called");
   this.setState(
    state => (
      (state.modalVisible = true),
      state
    )
  );
  }

  hideDropDown(){
    this.setState(
      state => (
        (state.modalVisible = false),
        state
      )
    );
    console.log(this.state.modalVisible);
  }

  getChatMessages(){
    this.startActivityIndicator();
    const getMessages = { conversationId: this.conversationId };
    console.log(this.conversationId);
    API.graphql(graphqlOperation(GetMessages, getMessages))
      .then(response => {
        console.log(response);
        let messages =  response.data.getMessages.items;
        messages.forEach(function(v,i){
          let message = messages[i];
          message._id = message.messageId;
          message.user._id = message.user.username;   
        });
        this.setState({
          messages: response.data.getMessages.items.reverse()
        });
        this.closeActivityIndicator();
      })
      .catch(err => {
        console.log("Failed to show list");
        console.log(err);
        this.closeActivityIndicator();
      });
  }

  componentDidMount() {
    this.getChatMessages();
    this.subscribeForChat();
    if((this.myUser.userType == 'USER') && this.consultationStatus.toLowerCase() == 'ongoing' ){
      this.subscribeForEndOfConsultation();
    }
  
  }

  backButtonClick() {
    if (this.myUser.userType == 'USER' ) {
      this.props.navigation.navigate('MainMenuPage');
    } else {
      this.props.navigation.navigate('DoctorMenuPage');
    }
   
   console.log(this.subscriptionForConsultationEnd);
    if (this.subscriptionForConsultationEnd) {
     this.subscriptionForConsultationEnd.unsubscribe();
    }
    
    this.subscriptionForMessages.unsubscribe();
    // this.props.navigation.popToTop();
  }

  componentWillMount() {
    this.setState({
      messages: []
    });
  }

  onSend(messages = []) {
    console.log("OnSendCalled");
    if (this.consultationStatus == "ClosedStatus") {
      Alert.alert(
        I18n.get("ConsultationClosed"),
        I18n.get("CantSendMessage"),
        [
          {
            text: "OK",
            onPress: () => console.log("OK Pressed")
          }
        ],
        { cancelable: false }
      );
      return;
    } else {
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, messages)
      }));

      var message = messages[0];
      message.conversationId = this.conversationId;
      message.messageId = message._id;
      console.log(message);
      console.log(this.consultationStatus);

      API.graphql(graphqlOperation(CreateMessage, message))
        .then(response => {
          console.log(response);
        })
        .catch(exception => {
          console.log(exception);
        });
    }
  }

 
  onReceive(messages = []) {
    console.log("OnReceiveCalled" + messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  //chatId is same as consultationID
 subscribeForEndOfConsultation(){
  console.log("subscribeForEndOfConsultation");
  const subscriptionInput = {
    username: this.consulation.username,
    createdAt: this.consulation.createdAt
  };
  console.log(subscriptionInput);
  this.subscriptionForConsultationEnd = API.graphql(
    graphqlOperation(SubscribeForEndOfConsultation, subscriptionInput)
  ).subscribe({
    next: response => {
      console.log(response);
      this.subscriptionForConsultationEnd.unsubscribe();
      this.props.navigation.navigate('FeedbackPage');
    }
  });
 }

  subscribeForChat() {
    const subscriptionInput = {
      conversationId: this.conversationId
    };
  
    this.subscriptionForMessages = API.graphql(
      graphqlOperation(SubscriptionToNewMessage, subscriptionInput)
    ).subscribe({
      next: response => {
        console.log(response);
        var message = response.value.data.subscribeToNewMessage;
        console.log(message);
        Cache.getItem("User").then(user => {
          if (user) {
            const uName = user.userName;
            if (message.user.username == uName) {
              return;
            }
            message._id = message.messageId;
            this.onReceive(message);
          }
        });
      }
    });
  }

  renderBubble = props => {
    let username = props.currentMessage.user.userName;
    var color;
    if (this.myUser.userName == username) {
      color = "#e67e22";
    } else {
      color = "#F3F6E7";
    }

    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: "white"
          }
        }}
        wrapperStyle={{
          left: {
            backgroundColor: color
          }
        }}
      />
    );
  };

  endConsultation() {
    this.startActivityIndicator();
    const items = this.conversationId.split("-");
    const uname = items[0];
    const created = items[1];
    const endConsultationInput = { 
      username: uname,
      createdAt: created ,
      conversationStatus:"CLOSED"
    };

    API.graphql(graphqlOperation(EndConversation, endConsultationInput))
      .then(response => {
        console.log(response);
        this.closeActivityIndicator();
        this.props.navigation.navigate("DoctorMenuPage");
      }).catch(err => {
        console.log(err);
        this.closeActivityIndicator();
    });
  }

  confirmPayment() {
    this.startActivityIndicator();
    const items = this.conversationId.split("-");
    const uname = items[0];
    const created = items[1];
    //Make an API call to update the chat room for payment confirmation
    const confirmPaymentInput = { 
      username: uname,
      createdAt: created ,
      payment:"Done"
    }; 

    console.log(confirmPaymentInput);
    API.graphql(graphqlOperation(ConfirmPayment, confirmPaymentInput))
      .then(response => {
        console.log(response);
        this.consulation.payment = "Done";
        this.closeActivityIndicator();
        Alert.alert(
          "",
          I18n.get("Payment Confirmed"),
          [{ text: "OK",
           onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }).catch(err => {
        console.log(err);
        this.closeActivityIndicator();
    });
  }

  showQuestionAnsewrs() {
    const { navigation } = this.props;
    const pet = navigation.getParam('petInfo');
    this.props.navigation.navigate("QuestionsPage",{
        petInfo:this.pet,
        questions: this.questions
    });
  }

  onPressDDList(item,type) {
   // console.log(item + "-" + type);
    this.hideDropDown();
    switch(item.key) {
      case "1": 
        console.log("1");
        this.endConsultation();
        break;
      
      case "2":
        console.log("2");
        this.showQuestionAnsewrs();
        break;

      case "3":
        console.log("3");
        this.confirmPayment();
        break;
    }
  }

 getRightButtonText() {
   if(this.myUser.userType == 'DOCTOR'){
     return "More"
   } else {
     return ""
   }
 }

  render() {

    const { navigation } = this.props;
    const navTitle = I18n.get("Chat");
    console.log("Render:" + this.myUser);
    let chatOptions = null;
    if(this.consultationStatus == "CLOSED"){

      if (this.consulation.payment == "Done") {
        chatOptions = [
          { key: "2", name: I18n.get("Questions Answers") }
        ];
      } else {
        chatOptions = [
          { key: "2", name: I18n.get("Questions Answers") },
          { key: "3", name: I18n.get("Confirm Payment") }
        ];
      }
     
    } else {
      if (this.consulation.payment == "Done") {
        chatOptions = [
          { key: "1", name: I18n.get("End Consultation") },
          { key: "2", name: I18n.get("Questions Answers") }
        ];
      } else{
        chatOptions = [
          { key: "1", name: I18n.get("End Consultation") },
          { key: "2", name: I18n.get("Questions Answers") },
          { key: "3", name: I18n.get("Confirm Payment") }
        ];
      }
    }
    return (
      <View style={styles.mainContainer}>
        <NavBar
          onBackPress={this.backButtonClick}
          rightButton={this.getRightButtonText()}
          rightButtonClick={()=>this.rightButtonClick()}
          title={navTitle.toUpperCase()}
        />
         <GiftedChat
          messages={this.state.messages}
          renderBubble={this.renderBubble}
          messageIdGenerator={this.messageIdGenerator}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.myUser.userName,
            username: this.myUser.userName,
            fullName: this.myUser.fullName
          }}/> 
        <DropDown 
            dropDownType={"ChatDD"}
            modalVisible={this.state.modalVisible}
            dropDownData={chatOptions}
            onPressDDList={(item, type) => this.onPressDDList(item, type)} >
        </DropDown>
        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
  },

  petListContainer: {
    marginTop: 50,
    flexDirection: "column",
    backgroundColor: "transparent"
  },

  listItemCotainer: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  petButtonContainer: {
    flexDirection: "column",
    width: "75%",
    height: 40,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  },

  petImageContainer: {
    width: "25%",
    height: 70,
    marginLeft: 5,
    marginBottom: 20,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "flex-start"
  },

  petCategoryText: {
    fontSize: 12,
    color: "black"
  },

  logoButton: {
    height: "20%",
    width: "25%",
    // marginTop: "2%",
    marginLeft: "70%",
    backgroundColor: "transparent"
  },

  logoImage: {
    alignSelf: "flex-end",
    resizeMode: "contain",
    marginTop: 10,
    width: 80,
    height: 60,
    marginRight: 20
  },

  imageBackgroundStyle: {
    width: "90%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackgroundTextStyle: {
    color: "white",
    fontSize: 20
  },
  imageBackgroundImageStyle: {
    borderRadius: 20
  },

  headerContainer: {
    height: "10%",
    marginTop: 0,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },

  headerImage: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  backButtonStyle: {
    backgroundColor: "transparent",
    width: 44,
    height: 44,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center"
  },

  descriptionView: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },

  handSymbol: {
    width: 25,
    height: 25
  },

  descriptionText: {
    marginLeft: 15,
    fontSize: 14,
    width: "70%"
  },

  backBtn: {
    marginLeft: 20,
    width: 30,
    height: 30
  },

  backBtnImage: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
});

export default ChatPage;
