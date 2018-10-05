//import {connect} from 'react-redux'

import { Auth } from "aws-amplify";
import React from "react";
import { I18n } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";

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

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
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
        .then(user => {
          console.log(user);
          this.props.navigation.navigate("MainMenuPage");
        })
        .catch(err => {
          console.log(err);
          Alert.alert(
            "Error",
            I18n.get("Username and Password are not correct"),
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
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
    this.props.navigation.navigate("AdminLoginPage");
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
          
            <TouchableOpacity 
                 onPress= {this.goToAdminPanel}
                 style = {styles.logoButton}>
            <ImageBackground
              source={require("../../images/logoImage.png")}
              style= {styles.logoImage}
              imageStyle= {styles.logoImageimageStyle}
            >
            </ImageBackground>
            </TouchableOpacity>
         
          // Contains Input Filds and Login Button
          <View style={styles.middleContainer}>
            // Username Field
            <Text style={styles.loginText}>{I18n.get("Username")}</Text>
            <TextInput
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
            // Password Field
            <Text style={styles.passwordText}>{I18n.get("Password")}</Text>
            <TextInput
              ref={input => {
                this.secondTextInput = input;
              }}
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={
                text =>
                  this.setState(state => ((state.user.password = text), state)) //placeholder="Password"
              }
            />
            //SignINButton
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
                  {I18n.get("Sign In")}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            // Forgot Password Field
            <Button
              style={styles.forgotPasswordButton}
              color="grey"
              title={I18n.get("Forgot Password")}
              onPress={this.forgotPasswordButtonClick}
            />
            // Register Button
            <Button
              color="darkgrey"
              title={I18n.get("RegisterMe")}
              onPress={this._onRegisterClick}
            />
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
  logoButton: {
    height: "20%",
    width: "25%",
    // marginTop: "2%",
    marginLeft: "70%",
    backgroundColor: "transparent"
  },
  logoImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  logoImageimageStyle: {
    resizeMode: 'contain'
  },
  
  loginButton: {
    height: "15%",
    width: "90%",
    // backgroundColor:'mediumseagreen',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    //backgroundColor: "pink",
    width: "100%",
    height: "50%",
    alignItems: "center",
    paddingTop: "10%"
  },
  textInput: {
    height: "14%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    marginBottom: "10%",
    paddingHorizontal: "5%"
  },
  loginText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#7C7B7B",
    marginBottom: 5,
    marginRight: "66%"
  },
  passwordText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#7C7B7B",
    marginBottom: 5,
    marginRight: "60%"
  },
  imageBackgroundStyle: {
    width: "100%",
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
  forgotPasswordButton: {
    fontSize: 17,
    marginTop: "5%",
    marginBottom: "8%"
  }
});

export default LoginPage;
