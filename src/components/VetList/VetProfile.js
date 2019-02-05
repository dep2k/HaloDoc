import { Auth } from "aws-amplify";
import React from "react";
import { I18n } from "aws-amplify";

import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
  ImageBackground
} from "react-native";

import Loader from "../../ActivityIndicator";
import { NavBar } from "../Reusable/NavBar";

const base = "../../images/";
const navBarImage = require(base + "navbarImage.png");

const backButtonImage = require(base + "BackButtonShape.png");
const logoImage = require(base + "logoImage.png");
const placeHolderImage = require(base + "placeholderImage.png");

import { Avatar } from "react-native-elements";

class VetProfile extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.navigation.state.params);

    this.state = {
      defaultNameText: "My Original Text",
      animating: false
    };
    this.backButtonClick = this.backButtonClick.bind(this);
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
  updateText = () => {
    this.setState({ defaultNameText: "My Changed Text" });
  };

  render() {
    const { navigation } = this.props;
    const doc = navigation.getParam("docInfo");
    const docName = doc.name;
    const docSpeciality = doc.speciality;
    const docAddress = doc.address;
    const docRegId = doc.registrationId;
    const docPhnNo = doc.phoneNo;
    const docEmail = doc.email;
    const docHomeTown = doc.homeTown;
    const docMedCenter = doc.medicalCenter;
    const docDepartment = doc.department;

    return <View style={styles.mainContainer}>
        <NavBar showBackBtn="false" onBackPress={this.backButtonClick} />
        {this.state.animating && <Loader animating={this.state.animating} />}
        <View style={styles.profilePicContainer}>
          <Avatar large rounded source={placeHolderImage} onPress={() => console.log("Works!")} activeOpacity={0.7} />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.drNameText}>{docName}</Text>
          <Text style={styles.drSpecialityText}>
            {I18n.get("Specialist") + ": " + I18n.get(docSpeciality)}
          </Text>

          <View style={styles.firstTextInputContainer}>
            <Text style={styles.formText}>
              {I18n.get("RegistrationId")}
            </Text>
            <Text style={styles.dataTextStyle}>{docRegId}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Address")}</Text>
            <Text style={styles.dataTextStyle}>{docAddress}</Text>
          </View>
          {/* <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("PhoneNo")}</Text>
            <Text style={styles.dataTextStyle}>{docPhnNo}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Email")}</Text>
            <Text style={styles.dataTextStyle}>{docEmail}</Text>
          </View> */}
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("HomeTown")}</Text>
            <Text style={styles.dataTextStyle}>{docHomeTown}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("MedicalCenter")}</Text>
            <Text style={styles.dataTextStyle}>{docMedCenter}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Department")}</Text>
            <Text style={styles.dataTextStyle}>{docDepartment}</Text>
          </View>
          <View style={styles.lastLineStyle} />
        </View>
      </View>;
  }
}

export default VetProfile;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
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
    height: "100%"
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: "12%",
    height: "20%",
    marginLeft: "5%",
    marginTop: "7%",
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonImageStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  },
  profilePicContainer: {
    height: 80,
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%"
    // backgroundColor: 'black'
  },
  drNameText: {
    fontSize: 18,
    color: "#A4C952",
    fontWeight: "bold"
  },
  drSpecialityText: {
    fontSize: 14,
    color: "#A4C952",
    fontWeight: "normal"
  },
  middleContainer: {
    height: 320,
    width: "80%",
    marginHorizontal: "10%",
    // backgroundColor : "black",
    marginTop: 25
  },
  formText: {
    width: "35%",
    color: "#8BE0DE",
    marginLeft: "1%",
    alignSelf: "center"
  },
  firstFormText: {
    width: "35%",
    color: "#8BE0DE",
    marginLeft: "1%",
    alignSelf: "center",
    marginTop: 20
  },
  lastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
  },

  firstTextInputContainer: {
    flexDirection: "row",
    height: 44,
    width: "100%",
    marginTop: 40,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  textInputContainer: {
    flexDirection: "row",
    height: 44,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  dataTextStyle: {
    width: "70%",
    color: "black",
    marginLeft: "1%",
    alignSelf: "center"
  }
});
