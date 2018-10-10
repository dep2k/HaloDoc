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

const base = "../../images/";
const navBarImage = require(base + "navbarImage.png");
const backButtonImage = require(base + "BackButtonShape.png");
const logoImage = require(base + "logoImage.png");

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
    const itemId = navigation.getParam("itemId", "NO-ID");
    // const otherParam = navigation.getParam('otherParam', 'some default value');

    // console.log("ItemId:" + itemId);

    // console.log(this.props.navigation.state.params);

    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <ImageBackground source={navBarImage} style={styles.headerImage}>
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={backButtonImage}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        {this.state.animating && <Loader animating={this.state.animating} />}
        <View style={styles.profilePicContainer}>
          <Avatar
            large
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View style={styles.middleContainer}>
          <Text style={styles.drNameText} onPress={this.updateText}>
            {this.state.defaultNameText}
          </Text>
          <Text style={styles.drSpecialityText} onPress={this.updateText}>
            {this.state.defaultNameText}
          </Text>

          <View style={styles.firstTextInputContainer}>
            <Text style={styles.formText}>{I18n.get("Speciality")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("Speciality")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Address")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("Address")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("RegistrationId")}</Text>
            <Text style={styles.dataTextStyle}>
              {I18n.get("RegistrationId")}
            </Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("PhoneNo")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("PhoneNo")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Email")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("Email")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("HomeTown")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("HomeTown")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("MedicalCenter")}</Text>
            <Text style={styles.dataTextStyle}>
              {I18n.get("MedicalCenter")}
            </Text>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Department")}</Text>
            <Text style={styles.dataTextStyle}>{I18n.get("Department")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
        </View>
      </View>
    );
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
    fontSize: 21,
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
    height: "100%",
    color: "#8BE0DE",
    height: 40,
    marginLeft: "1%",
    // backgroundColor: 'black',
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  formTextInputStyle: {
    width: "70%",
    height: "100%",
    //  justifyContent: "flex-end",
    alignItems: "flex-end"
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
    marginTop: 25,
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
    height: "100%",
    color: "darkgrey",
    marginLeft: "1%",
    // backgroundColor: 'black',
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  }
});
