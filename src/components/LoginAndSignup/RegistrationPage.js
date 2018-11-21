import React from "react";
import { I18n } from "aws-amplify";
import { CheckBox } from "react-native-elements";
// import PhoneInput from "react-native-phone-input";

import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import { Auth } from "aws-amplify";
import { Cache } from "aws-amplify";
import Loader from "../../ActivityIndicator";

const base = "../../images/";
const backButtonImage = require(base + "BackButtonShape.png");

class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        userName: "",
        phoneNo: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      phncode: "+57",
      checked: true,
      animating: false
    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this._registerBtnClick = this._registerBtnClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.termsButtonClick = this.termsButtonClick.bind(this);
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }
  termsButtonClick() {
    this.props.navigation.navigate("TermsPage");
  }
  checkBoxClick() {
    this.setState({ checked: !this.state.checked });
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  _registerBtnClick() {
    const user = this.state.user;
    this.startActivityIndicator();
    if (
      user.firstName &&
      user.lastName &&
      user.userName &&
      user.email &&
      user.phoneNo &&
      user.password &&
      user.confirmPassword
    ) {
      if (user.password.length >= 8) {
        if (user.password == user.confirmPassword) {
          Auth.signUp({
            username: user.userName,
            password: user.password,
            attributes: {
              email: user.email,
              phone_number: (this.state.phncode + user.phoneNo),
              given_name: user.firstName,
              family_name: user.lastName,
              'custom:userType': "USER"

              // other custom attributes
            }
          })
            .then(data => {
              console.log(data);
              Cache.setItem("User", this.state.user);
              this.props.navigation.navigate("CodeConfirmationPage");
              this.closeActivityIndicator();
            })
            .catch(err => {
              console.log(err);
              this.closeActivityIndicator();
              Alert.alert(
                "Error",
                I18n.get("RegistrationUnsuccessful"),
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
            });
        } else {
          Alert.alert(
            "Error",
            I18n.get("Passwords dont match"),
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: false }
          );
          this.closeActivityIndicator();
        }
      } else {
        Alert.alert(
          "Error",
          I18n.get("PasswordLength"),
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
        this.closeActivityIndicator();
      }
    } else {
      Alert.alert(
        "Error",
        I18n.get("All Fields are mandatory"),
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      this.closeActivityIndicator();
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          {/* <ImageBackground source={require("../../images/newBackground.png")} style={styles.fullBackgroundImage} imageStyle={styles.fullbackgroundImageStyle}> */}
          <KeyboardAvoidingView
            style={styles.keyboradAvoidingContainer}
            behavior="padding"
          >
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.backButtonStyle}
                onPress={this.backButtonClick}
              >
                <Image
                  source={backButtonImage}
                  style={styles.backButtonImageStyle}
                />
              </TouchableOpacity>
              <View style={styles.titleView}>
                {" "}
                <Text style={styles.registerTextStyle}>
                  {I18n.get("Sign Up")}
                </Text>
              </View>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.firstTextInputStyle}
                autoCapitalize={"none"}
                placeholder={I18n.get("Firstname")}
                placeholderTextColor="white"
                returnKeyType={"next"}
                autoCorrect={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                blurOnSubmit={false}
                onChangeText={text =>
                  this.setState(state => ((state.user.firstName = text), state))
                }
              />
              <TextInput
                ref={input => {
                  this.secondTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.thirdTextInput.focus();
                }}
                blurOnSubmit={false}
                style={styles.textInput}
                autoCapitalize={"none"}
                autoCorrect={false}
                placeholder={I18n.get("Lastname")}
                placeholderTextColor="white"
                onChangeText={text =>
                  this.setState(state => ((state.user.lastName = text), state))
                }
              />
              <TextInput
                ref={input => {
                  this.thirdTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.fourthTextInput.focus();
                }}
                blurOnSubmit={false}
                style={styles.textInput}
                autoCapitalize={"none"}
                placeholder={I18n.get("UserId")}
                autoCorrect={false}
                placeholderTextColor="white"
                onChangeText={text =>
                  this.setState(state => ((state.user.userName = text), state))
                }
              />
              <View
                style={styles.phnTextInputView}
              >
              <Text style = {styles.phnCodeText}>
                 {this.state.phncode}
              </Text>
                <TextInput
                  ref={input => {
                    this.fourthTextInput = input;
                  }}
                  returnKeyType={"next"}
                  onSubmitEditing={() => {
                    this.fifithTextInput.focus();
                  }}
                  blurOnSubmit={false}
                  style={styles.phnTextInput}
                  autoCapitalize={"none"}
                  placeholder="Phone Number"
                  autoCorrect={false}
                  placeholderTextColor="white"
                  onChangeText={text =>
                    this.setState(state => ((state.user.phoneNo = text), state))
                  }
                />
              </View>
              <TextInput
                ref={input => {
                  this.fifithTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.sixthTextInput.focus();
                }}
                blurOnSubmit={false}
                style={styles.textInput}
                autoCapitalize={"none"}
                autoCorrect={false}
                keyboardType={"email-address"}
                placeholder={I18n.get("Email")}
                autoCorrect={false}
                placeholderTextColor="white"
                onChangeText={
                  text =>
                    this.setState(state => ((state.user.email = text), state)) // value={ this.state.user.email  } // onChangeText={text => this.validate(text)}
                }
              />
              <TextInput
                ref={input => {
                  this.sixthTextInput = input;
                }}
                secureTextEntry={true}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.seventhTextInput.focus();
                }}
                blurOnSubmit={false}
                style={styles.textInput}
                autoCapitalize={"none"}
                autoCorrect={false}
                placeholder={I18n.get("Create password")}
                placeholderTextColor="white"
                onChangeText={text =>
                  this.setState(state => ((state.user.password = text), state))
                }
              />
              <TextInput
                ref={input => {
                  this.seventhTextInput = input;
                }}
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize={"none"}
                autoCorrect={false}
                placeholder={I18n.get("Confirm password")}
                placeholderTextColor="white"
                onChangeText={text =>
                  this.setState(
                    state => ((state.user.confirmPassword = text), state)
                  )
                }
              />
              <TextInput
                style={styles.lastTextInputStyle}
                placeholder={I18n.get("")}
                placeholderTextColor="white"
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this._registerBtnClick}
              style={styles.registerButton}
            >
              <ImageBackground
                source={require("../../images/loginButtonImage.png")}
                style={styles.imageBackgroundRegisterButtonStyle}
                imageStyle={styles.imageStyleRegisterButtonImageBackground}
              >
                <Text style={styles.imageBackgroundTextStyle}>
                  {I18n.get("RegisterMe")}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              center
              containerStyle={styles.checkboxContainerStyle}
              checkedIcon="check-square-o"
              checkedColor="green"
              uncheckedColor="white"
              uncheckedIcon="square-o"
              checked={
                this.state.checked // title= {I18n.get('Accept terms and conditions')}
              }
              onPress={this.checkBoxClick}
            />
            <TouchableOpacity
              onPress={this.termsButtonClick}
              style={styles.termsButton}
            >
              <Text style={{ color: "white", fontSize: 12 }}>
                {I18n.get("Accept terms and conditions")}
              </Text>
            </TouchableOpacity>
          </View>

          {this.state.animating && <Loader animating={this.state.animating} />}
          {/* </ImageBackground> */}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#AACB61"
  },
  topContainer: {
    height: 60,
    width: "100%",
    //backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 20
  },
  backButtonImageStyle: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
  keyboradAvoidingContainer: {
    height: 460,
    flexDirection: "column",
    //backgroundColor: "yellow",
    width: "100%",
    justifyContent: "flex-start"
    // alignItems: "center",
  },
  formContainer: {
    height: 360,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "flex-end"
    // backgroundColor: "black"
  },
  registerButton: {
    height: 40,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  firstTextInputStyle: {
    height: 35,
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end"
  },
  textInput: {
    height: 35,
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end",
   // backgroundColor: "pink"
  },
  phnCodeText: { 
    color: "white", 
    width: "10%",
     alignSelf: 'center' 
  },
    phnTextInputView:{
    flexDirection: "row",
    marginTop: "3%",
    height: 35,
    width: "80%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  phnTextInput: {
   
    height: 35,
    width: "78%",
    color: "white",
    alignContent: "flex-end"
  },
  lastTextInputStyle: {
    height: 35,
    width: "80%",
    marginTop: "3%",
    alignContent: "flex-end"
  },
  buttonContainer: {
    height: 40,
    // backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    marginTop: 20
  },

  fullBackgroundImage: {
    flex: 1
  },
  checkboxContainer: {
    flexDirection: "row",
    //  backgroundColor: 'black',
    height: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  termsButton: {
    height: "30%",
    width: "60%",
    // backgroundColor:'black',
    justifyContent: "center",
    alignItems: "flex-start"
    // marginRight: "20%",
  },
  fullbackgroundImageStyle: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent"
  },
  imageBackgroundRegisterButtonStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  imageStyleRegisterButtonImageBackground: {
    borderRadius: 20
  },
  imageBackgroundTextStyle: {
    color: "white",
    fontSize: 20
  },
  titleView: {
    width: "75%",
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
  },
  registerTextStyle: {
    fontSize: 25,
    color: "white",
    marginTop: 25
  },
  checkboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "15%"
  }
});

export default RegistrationPage;
