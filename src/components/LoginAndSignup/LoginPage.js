//import {connect} from 'react-redux'

import { Auth } from "aws-amplify";
import React from "react";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Cache } from "aws-amplify";
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
import { CreateDoctor } from "../../Queries/DoctorAPI";
import { SubscribeToCreateDoctor } from "../../Queries/DoctorAPI";
const base = "../../images/";
const logoImage = require(base + "logoImage.png");

class LoginPage extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      user: {
        username: "TestUser",
        password: "TestUser"
      },
      animating: false
    };

    this._onSignInClick = this._onSignInClick.bind(this);
    this._onRegisterClick = this._onRegisterClick.bind(this);
    this.forgotPasswordButtonClick = this.forgotPasswordButtonClick.bind(this);
    this.goToAdminPanel = this.goToAdminPanel.bind(this);

  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  componentDidMount() {
    //this.props.initializeApp()
  }

  componentWillUnmount() {
    // clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }

  forgotPasswordButtonClick() {
    this.props.navigation.navigate("ForgotPasswordPage");
  }

  _onSignInClick() {
    const user = this.state.user;
    this.startActivityIndicator();

    if (user.username && user.password && user.password.length >= 8) {
      Auth.signIn(user.username, user.password)
        .then(data => {
          this.closeActivityIndicator();
          console.log(data);
          if (user.username == 'Admin') {
            this.props.navigation.navigate("AdminMenuPage");
          } else {
            const payload = data.signInUserSession.idToken.payload;;
            let cognitoUser = {
              firstName: payload.given_name,
              lastName: payload.family_name,
              userName: user.username,
              phoneNo: payload.phone_number,
              email: payload.email,
              userType: payload['custom:userType']
            }
            console.log(cognitoUser);
            Cache.setItem("User", cognitoUser).then(result => {
              if (cognitoUser.userType == "USER") {
                this.props.navigation.navigate("MainMenuPage");
              } else if (cognitoUser.userType == "DOCTOR") {
                this.props.navigation.navigate("DoctorMenuPage");
              }
            });

          }
        }).catch(err => {
          console.log(err);
          Alert.alert(
            "Error",
            I18n.get("Username and Password are not correct"),
            [{
              text: "OK",
              onPress: () => console.log("OK Pressed")
            }],
            { cancelable: false }
          );
          this.closeActivityIndicator();
        });
    } else {
      Alert.alert(
        "Error",
        I18n.get("Both Fields are mandatory"),
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      this.closeActivityIndicator();
    }
  }



  goToAdminPanel() {
    //  this.props.navigation.navigate("AdminLoginPage");
  }

  _onRegisterClick() {
    console.log("RegisterBtnClick");
    this.props.navigation.navigate("RegistrationPage");
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={require("../../images/navbarImage.png")}
              style={styles.headerImage}
            />
          </View>
          <View style={styles.logoContainer}>
            <TouchableOpacity
              onPress={this.goToAdminPanel}
              style={styles.logoButton}>
              <ImageBackground
                source={logoImage}
                style={styles.logoImage}
                imageStyle={styles.logoImageimageStyle}
              >
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.middleContainer}>
            <Text style={styles.loginText}>{I18n.get("Username")}</Text>
            <TextInput
              underlineColorAndroid={'rgba(0,0,0,0)'}
              autoCapitalize={"none"}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.secondTextInput.focus();
              }}
              blurOnSubmit={false}
              style={styles.textInput}
              onChangeText={
                text =>
                  this.setState(state => ((state.user.username = text), state)) // placeholder={I18n.get('Username')}
              }
            />
            <Text style={styles.passwordText}>{I18n.get("Password")}</Text>
            <TextInput
              ref={input => {
                this.secondTextInput = input;
              }}
              underlineColorAndroid={'rgba(0,0,0,0)'}
              secureTextEntry={true}
              style={styles.passwordTextInput}
              onChangeText={
                text =>
                  this.setState(state => ((state.user.password = text), state)) //placeholder="Password"
              }
            />
            <TouchableOpacity
              onPress={this._onSignInClick}
              style={styles.loginButton}
            >
              <ImageBackground
                source={require("../../images/loginButtonImage.png")}
                style={styles.imageBackgroundStyle}
                imageStyle={styles.imageBackgroundImageStyle}
              >
                <Text style={styles.imageBackgroundTextStyle}>
                  {I18n.get("LogIn")}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity

              style={styles.forgotPasswordButton}
              onPress={this.forgotPasswordButtonClick} >
              <Text style={{fontSize: 17,color:'grey'}}>{I18n.get("Forgot Password")}</Text>
                        </TouchableOpacity>

            <TouchableOpacity
              onPress={this._onRegisterClick}>
              <Text style={{color:'darkgrey'}}>{I18n.get("RegisterMe")}</Text>
            </TouchableOpacity>
          </View>
          {this.state.animating && <Loader animating={this.state.animating} />}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  headerContainer: {
    height: 70,
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
  logoButton: {
    height: 60,
    width: 80,
    marginRight: 35
    // backgroundColor: "transparent"
  },
  logoImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImageimageStyle: {
    resizeMode: "contain"
  },
  logoContainer: {
    width: "100%",
    height: 80,
    marginTop: 10,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
    // backgroundColor: 'green'
  },
  loginButton: {
    height: 40,
    width: "90%",
    // backgroundColor:'mediumseagreen',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    width: "100%",
    height: "50%",
    alignItems: "center",
    paddingTop: "10%"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    marginBottom: "7%",
    paddingHorizontal: "5%"
  },
  passwordTextInput: {
    height: 40,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    marginBottom: "12%",
    paddingHorizontal: "5%"
  },
  loginText: {
    fontSize: 15,
    fontWeight: "normal",
    width: 35,
    paddingLeft: 5,
    color: "#7C7B7B",
    marginBottom: 5,
    marginRight: "60%",
    textAlign: "left"
  },
  passwordText: {
    fontSize: 15,
    width: 35,
    paddingLeft: 5,
    fontWeight: "normal",
    color: "#7C7B7B",
    marginBottom: 5,
    marginRight: "60%",
    textAlign: "left"
  },
  imageBackgroundStyle: {
    width: "100%",
    height: "100%",
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

  forgotPasswordButton: {
    marginTop: "5%",
    marginBottom: "8%",
  }
});

export default LoginPage;
