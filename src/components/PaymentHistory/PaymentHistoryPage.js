import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import { I18n } from "aws-amplify";

import Loader from "../../ActivityIndicator";
import { GetDoctorConversations, ListConversations, GetUserConversations } from "../../Queries/Chatapi";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { NavBar } from "../Reusable/NavBar";
import { Cache } from "aws-amplify";
import { LogoImage } from "../Reusable/LogoImage";

const base = "../../images/";
const historyIcon = require(base + "HistoryIcon.png");

var moment = require("moment");
//const newDate = moment(new Date(1528101680 * 1000)).format("MM/DD/YYYY ");  


class DataListItem extends React.Component {
  render() {
    return <TouchableOpacity onPress={this.props.onPress} style={styles.cellContainer}>

        <Text style={styles.nameText}>{this.props.item.doctor.name}</Text>
        
      <Text style={styles.nameText}>{moment(new Date((this.props.item.createdAt) * 1)).format("MM/DD/YYYY ")}</Text>
        <Text style={styles.nameText}>
        {I18n.get("ConsultationPayment") + ": "  + I18n.get(this.props.item.payment.toLowerCase())}
        </Text>
        <View style={styles.listSeperationLine} />
        {/* <Text style={styles.statusText}>{this.props.item.status}</Text> */}
      </TouchableOpacity>;
  }
}

class PaymentHistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.username = ""

    this.state = {
      conversationListData: [],
      animating: false,
      consultationStatus: ""
    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this._handleRowClick = this._handleRowClick.bind(this);
  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  _handleRowClick(item) {
     if (this.username == "Admin") {
          return;
     }
    this.props.navigation.navigate("ChatPage",{ 
         user : this.user,
         chatId: item.username + "-" + item.createdAt , 
         consultationStatus: this.consultationType,
         petInfo: item.pet,
         questions: item.questionsAndAnswers,
         consultation: item,
        }
     );
  }
  renderHeading() {
    if (this.consultationType == "ONGOING") {
      return (
        <Text style={styles.historyText}>{I18n.get("OpenConsultations")}</Text>
      );
    } else if (this.consultationType == "CLOSED") {
      return (
        <Text style={styles.historyText}>
          {I18n.get("HistoryOfConsultaions")}
        </Text>
      );
    } else if (this.consultationType == "listOfAllConsultations") {
      return <Text style={styles.historyText}>
        {I18n.get("Consultations")}
        </Text>;
    }
  }
  backButtonClick() {
    console.log("BackBtnClick");
    this.props.navigation.goBack(null);
  }
  componentDidMount() {
    this.startActivityIndicator();
    //console.log(newDate);
    const { navigation } = this.props;

    this.consultationType = navigation.getParam("consultationType");
    if (this.consultationType == "ONGOING") {
      this.setState(
        state => ((state.consultationStatus = "ONGOING"), state)
      );
    } else if (this.consultationType == "CLOSED") {
      this.setState(
        state => ((state.consultationStatus = "CLOSED"), state)
      );
    }

    Cache.getItem("User").then(user => {
      this.user = user;
      console.log(user);
      if (user && user.userType == "DOCTOR") {
        const getDoctorConversations = {
          username: user.userName,
          conversationStatus: this.state.consultationStatus
        };
        console.log(getDoctorConversations);
        return API.graphql(
          graphqlOperation(GetDoctorConversations, getDoctorConversations)
        )
          .then(response => {
            console.log(response);
            this.setState({
              conversationListData: response.data.getDoctorConversations.items
            });
            this.closeActivityIndicator();
          })
          .catch(err => {
            console.log("Failed to show list");
            console.log(err);
            this.closeActivityIndicator();
          });
      } else if (user && user.userType == "USER") {
        const getUserConversations = {
          username: user.userName,
          conversationStatus: this.state.consultationStatus
        };
        return API.graphql(graphqlOperation(GetUserConversations, getUserConversations))
          .then(response => {
            console.log(response);
            this.setState({
              conversationListData:
                response.data.getUserConversations.items
            });
            this.closeActivityIndicator();
          })
          .catch(err => {
            console.log("Failed to show list");
            console.log(err);
            this.closeActivityIndicator();
          });
      } else {
        const listConversations = {
          username: 'Admin'
        }
        return API.graphql(graphqlOperation(ListConversations, listConversations))
          .then(response => {
            console.log("got User conversations");
            console.log(response);
            this.setState({
              conversationListData:
                response.data.listConversations.items
            });
            this.username = "Admin";
            this.closeActivityIndicator();
          })
          .catch(err => {
            console.log("Failed to show list");
            console.log(err);
            this.closeActivityIndicator();
          });
      }
    })
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />
       <LogoImage/>
        <View style={styles.descriptionView}>
          <Image source={historyIcon} style={styles.handSymbol} />
          {this.renderHeading()}
        </View>

        <FlatList
          style={styles.listContainer}
          data={this.state.conversationListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <DataListItem 
            onPress={() => this._handleRowClick(item)}
            item={item} 
            index={index} />
          }}
        />
        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white"
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
  listContainer: {
    marginTop: 25,
    flexDirection: "column"
    //  backgroundColor: "lightgreen"
  },
  nameText: {
    color: "#8BE0DE",
    fontSize: 18,
    padding: 2
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
  handSymbol: {
    width: 35,
    height: 35
  },

  historyText: {
    marginLeft: 15,
    fontSize: 20,
    width: "80%",
    color: "#A4C952"
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
  },
  descriptionView: {
    marginLeft: 20,
    marginTop: 50,
    height: 40,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
    // backgroundColor: 'black'
  },
  listSeperationLine: {
    backgroundColor: "#8BE0DE",
    marginTop: 10,
    height: 1.3,
    width: "100%"
  },
  cellContainer: {
    height: 100,
    width: "90%",
    flexDirection: "column",
    marginHorizontal: "5%"
    //  backgroundColor: "orange"
  },
  statusText: {
    color: "darkgrey",
    fontSize: 13,
    alignSelf: "flex-end"
  }
});

export default PaymentHistoryPage;
