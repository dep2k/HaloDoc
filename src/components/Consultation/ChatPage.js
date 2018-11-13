
import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    ActivityIndicator
} from "react-native";

import { GiftedChat, Bubble, messageIdGenerator } from 'react-native-gifted-chat'
import { NavBar } from "../Reusable/NavBar";
import { SubscriptionToNewMessage , CreateMessage} from "../../Queries/Chatapi";
import Amplify, { API, graphqlOperation,Cache } from "aws-amplify";

class ChatPage extends React.Component {

    constructor(props) {

        super(props);    
        state = {
            messages: [],
        }  
        this.backButtonClick = this.backButtonClick.bind(this);

        const { navigation } = this.props;
        // const pet = navigation.getParam('petInfo');
        // const questionsList = navigation.getParam('questions');
        this.conversationId = navigation.getParam('chatId');
        this.myUser = navigation.getParam('user');
        console.log("constructor:" + this.myUser);
    }

    componentDidMount(){
      
         this.subscribeForChat(this.conversationId);
    }

    backButtonClick() {
        this.props.navigation.goBack(null);
        this.subscription.unsubscribe();
       // this.props.navigation.popToTop();
    }

    componentWillMount() {

        this.setState({
            messages: [
              
            ],
        })
 
    }

    onSend(messages = []) {

        console.log("OnSendCalled");
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))

        var message = messages[0];
        message.conversationId = this.conversationId;
        message.messageId = message._id;
        console.log(message);
        API.graphql(graphqlOperation(CreateMessage,message)).then((response)=>{
            console.log(response);
        }).catch((exception)=>{
            console.log(exception);
        });;
       
    }

    onReceive(messages = []) {
       
        console.log("OnReceiveCalled" + messages);
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    subscribeForChat(chatId){
        const subscriptionInput = {
          conversationId: chatId
        };
        console.log("subscribeForChat - ChatId:" + chatId);
        this.subscription = API.graphql(graphqlOperation(SubscriptionToNewMessage, subscriptionInput)
        ).subscribe({
            next: (response) => {
                console.log(response);
                var message = response.value.data.subscribeToNewMessage;
                console.log(message);
                Cache.getItem('User').then(user => {
                    if (user) {
                      const uName = user.userName;
                      if (message.user.username == uName){
                          return;
                      }
                      message._id = message.messageId;
                      this.onReceive(message);
                
                    }
                });
                
               
            }
        });
      
    }

    renderBubble = (props) => {

        let username = props.currentMessage.user.userName;
        var color;
        if (this.myUser.userName == username){
            color = '#e67e22';
        } else{
            color = '#F3F6E7';
        }
       
        return (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: 'white',
              },
            }}
            wrapperStyle={{
              left: {
                backgroundColor: color,
              },
            }}
          />
        );
      }
    
      

    render() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        const petName = pet.name;
        const petCategory = pet.category;
        const navTitle = petName + " - " + petCategory;
  
        console.log("Render:" + this.myUser);
        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} title = {navTitle.toUpperCase()}></NavBar>
                <GiftedChat
                messages={this.state.messages}
                renderBubble={this.renderBubble}
                messageIdGenerator={this.messageIdGenerator} 
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: this.myUser.userName,
                    username: this.myUser.userName,
                    fullName: this.myUser.fullName
                }}
            />
            </View>
        );
       
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
        backgroundColor: "transparent",

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
        backgroundColor: "transparent",

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
        alignSelf: 'flex-end',
        resizeMode: "contain",
        marginTop: 10,
        width: 80,
        height: 60,
        marginRight: 20,

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
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

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
        width: "70%",

    },

    backBtn: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },

    backBtnImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
})

export default ChatPage;