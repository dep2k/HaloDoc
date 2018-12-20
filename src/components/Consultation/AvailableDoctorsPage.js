import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList
} from "react-native";
import SVGImage from "react-native-svg-image";
import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { ListDoctors , ListAvailableDoctors} from "../../Queries/DoctorAPI";
import Loader from "../../ActivityIndicator";
import { Avatar } from "react-native-elements";
import { NavBar } from "../Reusable/NavBar";
import { CreateConversation, SubscriptionToNewMessage } from "../../Queries/Chatapi";
const base = "../../images/";
const backgroundImage = require(base + "newBackground.png");
const backButtonImage = require(base + "BackButtonShape.png");


class DataListItem extends React.Component {

  onSelectingDoctor() {
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.listCell}>
        <Avatar
          medium
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
          }}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View style={styles.textsView}>
          <Text style={styles.nameText}>{this.props.item.name}</Text>
          <Text style={styles.categoryText}>{this.props.item.speciality}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class AvailableDoctorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorsListData: [],
      animating: false
    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this._handleRowClick = this._handleRowClick.bind(this);
  }

  componentDidMount() {

    this.startActivityIndicator();
    const { navigation } = this.props;
    const pet = navigation.getParam('petInfo');
    const listInput = { speciality: pet.category };

    API.graphql(graphqlOperation(ListAvailableDoctors, listInput))
      .then(response => {
        console.log("List shown");
        console.log(response);
        this.setState({
          doctorsListData: response.data.listAvailableDoctors.items
        });
        this.closeActivityIndicator();
      })
      .catch(err => {
        console.log("Failed to show list");
        console.log(err);
        this.closeActivityIndicator();
      });
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }
  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  createConversation(doctor){
    const { navigation } = this.props;
    const pet = navigation.getParam('petInfo');
    const questionsList = navigation.getParam('questions');
    console.log("createConversation call");
    Cache.getItem('User').then(user => {
      if (user) {
        const uName = user.userName;
        pet.username = uName;
        const fName = user.firstName + " " + user.lastName;
        // Create Conversation Room
        const createConversationInput = {
          user: {
            username: uName,
            userType: "Patient",
            fullName: fName
          },
          doctor: {
            name: doctor.name,
            speciality: doctor.speciality,
            doctorId: doctor.doctorId
          },
          questionsAndAnswers: questionsList,
          pet: pet
        };

        console.log(createConversationInput);
        this.startActivityIndicator();
        API.graphql(graphqlOperation(CreateConversation, createConversationInput))
          .then(response => {
              this.closeActivityIndicator();
              console.log(response);
              this.consultation = response.data.createConversation;
              const id  = response.data.createConversation.username + "-" + response.data.createConversation.createdAt;
              Cache.getItem('User').then(user => {
                if (user) {
                    this.props.navigation.navigate("VetNotificationPage",{
                      petInfo:pet,
                      chatId: id,
                      consultation: this.consultation
                  });
                }
            });
          }).catch(err => {
            console.log(err);
            this.closeActivityIndicator();
          });
      } else{
        console.log("User Not Found");
      }
    });
  }

  _handleRowClick(doctor) {

    console.log("_handleRowClick");
    this.createConversation(doctor);
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: <SVGImage style={StyleSheet.absoluteFill} />
  });

  render() {

    const { navigation } = this.props;
    const pet = navigation.getParam('petInfo');
    const petName = pet.name;
    const petCategory = pet.category;
    const navTitle = petName + " - " + petCategory;

    return (

      <View style={styles.mainContainer}>
        <NavBar onBackPress={this.backButtonClick} title={navTitle.toUpperCase()}></NavBar>

        <Text style={styles.doctorsDirectoryText}>
          {I18n.get("DoctorsDirectory")}
        </Text>

        <View style={styles.flatList}>
          <FlatList
           style = {styles.doctorsList}
            data={this.state.doctorsListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <DataListItem
                  onPress={() => this._handleRowClick(item)}
                  item={item}
                  index={index}
                />
              );
            }}
          />
        </View>

        {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  doctorsDirectoryText: {
    fontSize: 21,
    color: "black",
    marginTop: "10%",
    alignItems:'center',
    marginBottom: 40
  },

  flatList: {
    width: "100%",
  },
  
  doctorsList: {
    // backgroundColor: 'black',
    width: "100%",
    height: "90%",
    // backgroundColor: 'green',
  },

  listCell: {
    flexDirection: "row",
    width: "100%",
    height: 40,
    // backgroundColor: "yellow",
    marginBottom: 25,
    marginLeft: 10,

  },
  nameText: {
    color: "black",
    fontSize: 18,
    padding: 2
  },
  categoryText: {
    color: "black",
    fontSize: 13,
    padding: 2,
    marginBottom: 10
  },
  listProfilePic: {
    height: 30,
    width: "10%",
    marginTop: "3%",
    marginLeft: "5%",
    marginRight: "5%",
    backgroundColor: "black"
  },
  textsView: {
    flexDirection: "column",
    height: 40,
    marginLeft: 10
  }
});
export default AvailableDoctorsPage;
