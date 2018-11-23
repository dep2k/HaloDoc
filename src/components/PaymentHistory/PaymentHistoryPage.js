import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from "react-native";
import { I18n } from "aws-amplify";

//import {listdata} from "../../data/FelinoData";
import { GetDoctorConversations } from "../../Queries/Chatapi";

import { logoImage } from "../../images/resource";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Avatar } from "react-native-elements";
import { NavBar } from "../Reusable/NavBar";
import { Cache } from "aws-amplify";


const base = "../../images/";
const myProfileImage = require(base + "myProfileImage.png");
const historyIcon = require(base + "HistoryIcon.png");


class DataListItem extends React.Component {
  render() {
    
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.cellContainer}>
        <Text style={styles.nameText}>{this.props.item.doctor.name}</Text>
        <Text style={styles.nameText}>{this.props.item.createdAt}</Text>
        <Text style={styles.nameText}>{"Payment is" + this.props.item.payment}</Text>
        <View style={styles.listSeperationLine}></View>
        {/* <Text style={styles.statusText}>{this.props.item.status}</Text> */}
      </TouchableOpacity>
    );
  }
}

class PaymentHistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversationListData: [],
      animating: false,
      consultationStatus: ""
    };

    this.backButtonClick = this.backButtonClick.bind(this);
  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  listBtnClick(item) {
    console.log("List Btn Click");
    console.log(item);
  }
  renderHeading() {
    if (this.consultationType == "OnGoingStatus") {
      return (
        <Text style={styles.historyText}>{I18n.get("OpenConsultations")}</Text>
      );
    } else if (this.consultationType == "ClosedStatus") {
      return (
        <Text style={styles.historyText}>
          {I18n.get("HistoryOfConsultaions")}
        </Text>
      );
    }
  }
  backButtonClick() {
    console.log("BackBtnClick");
    this.props.navigation.goBack(null);
  }
  componentDidMount() {
    this.startActivityIndicator();
    const { navigation } = this.props;
    this.consultationType = navigation.getParam("consultationType");

    Cache.getItem("User").then(user => {
      if (user) {
        if (this.consultationType == "OnGoingStatus") {
          this.setState(
            state => ((state.consultationStatus = "ONGOING"), state)
          );
        } else if (this.consultationType == "ClosedStatus") {
          this.setState(
            state => ((state.consultationStatus = "CLOSED"), state)
          );
        }

        const username = {
          username: user.userName
        };

        const getDoctorConversations = {
          username: "TestDoctor1",
          conversationStatus: this.state.consultationStatus
        };

        API.graphql(
          graphqlOperation(GetDoctorConversations, getDoctorConversations)
        )
          .then(response => {
            console.log("got doctor conversations");
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
      }
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />

        <Image source={logoImage} style={styles.logoImage} />

        <View style={styles.descriptionView}>
          <Image source={historyIcon} style={styles.handSymbol} />

          {this.renderHeading()}
        </View>

        <FlatList
          style={styles.listContainer}
          data={this.state.conversationListData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return <DataListItem item={item} index={index} />;
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
    flexDirection: "column",
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
    alignItems: "center",
   // backgroundColor: 'black'
  },
  listSeperationLine: {
    backgroundColor: "#8BE0DE",
    height: 1.3,
    width: "100%"
  },
  cellContainer: {
    height: 100,
    width: "90%",
    flexDirection: 'column',
    marginHorizontal: "5%",
  //  backgroundColor: "orange"
  },
  statusText: {
    color: 'darkgrey',
    fontSize: 13,
    alignSelf: 'flex-end'
  }

});

export default PaymentHistoryPage;
