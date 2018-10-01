import React from "react";
import { I18n } from "aws-amplify";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput
} from "react-native";

class AdminAddDoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../../images/navbarImage.png")}
            style={styles.headerImage}
          >
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={require("../../../images/BackButtonShape.png")}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Image style={styles.profilePic} />
        <Text style={styles.drNameText}>DRA. ALINA PEREZ GONZALES</Text>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("DoctorsId")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("HomeTown")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("MedicalCenter")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Address")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Departmant")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("PhoneNo")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Email")}</Text>
            <TextInput style={styles.formTextInputStyle} />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.buttonsContainer}>
            {/* <Text style={styles.passwordText}>{I18n.get("Password")}</Text>
            <TextInput
                style={styles.textInput}
            /> */}
                    <Text style={styles.passwordText}>{I18n.get("CreatePassword")}</Text>
                    <TextInput
                        style={styles.textInput}/>
            <TouchableOpacity
              onPress={this.registerButtonClick}
              style={styles.registerButton}
            >
              <ImageBackground
                source={require("../../../images/loginButtonImage.png")}
                style={styles.buttonImageBackgroundStyle}
                imageStyle={styles.buttonImageBackgroundImageStyle}
              >
                <Text style={styles.buttonImageBackgroundTextStyle}>
                  {I18n.get("Register")}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",

    alignItems: "center"
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

  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    width: "100%",
    height: "50%",
    alignItems: "center"
    // paddingTop: "10%"
  },
  drNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A3C852",
    marginTop: "10%"
  },
  profilePic: {
    width: "25%",
    height: "10%",
    backgroundColor: "green"
  },

  textInputContainer: {
    flexDirection: "row",
    height: "12%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  formContainer: {
    height: "50%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "2%"
    //backgroundColor: 'yellow'
  },
  formText: {
    width: "35%",
    height: "100%",
    color: "#8BE0DE",
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
  registerButton: {
    height: "32%",
    width: "90%",
    // backgroundColor:'mediumseagreen',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  buttonImageBackgroundStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonImageBackgroundTextStyle: {
    color: "white",
    fontSize: 20
  },
  buttonImageBackgroundImageStyle: {
    borderRadius: 20
  },
  buttonsContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
   // backgroundColor: "pink",
    width: "100%",
    height: "50%",
    alignItems: "center",
    paddingTop: "5%",
    marginTop: "5%"
  },
    textInput: {
        height: "28%",
        width: "90%",
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        marginBottom: "4%",
        paddingHorizontal: "5%"
    },
    passwordText: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#7C7B7B",
        marginBottom: 5,
        marginRight: "40%"
    },
});

export default AdminAddDoctorPage;
