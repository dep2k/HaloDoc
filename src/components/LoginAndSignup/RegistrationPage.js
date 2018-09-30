import React from "react";
import { I18n } from "aws-amplify";
import { CheckBox } from "react-native-elements";
import PhoneInput from "react-native-phone-input";
import ActivityIndicatorExample from "../../ActivityIndicator";

import {
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";

import { Auth } from "aws-amplify";
import NavigationService from "../../NavigationService";
import { Cache } from "aws-amplify";
import Loader from "../../ActivityIndicator";
class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
     
   // const styles_phnTextInput = StyleSheet.flatten(styles.phoneTextInput);
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
      checked: true,
      animating: false
      // email: '',
      // validated: false,
    };
   

    this.backButtonClick = this.backButtonClick.bind(this);
    this._registerBtnClick = this._registerBtnClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.termsButtonClick = this.termsButtonClick.bind(this);
  }
  
  // validate = (text) => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(text) === false) {
  //     console.log("Email is Not Correct");
  //     this.setState({ email: text })
  //     return false;
  //   }
  //   else {
  //     this.setState({ email: text })
  //     console.log("Email is Correct");
  //   }
  // }
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
    // this.props.navigation.navigate('SuccesfulLoginPage');
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
              phone_number: user.phoneNo,
              given_name: user.firstName,
              family_name: user.lastName

              // other custom attributes
            }
          })
            .then(data => {
              console.log(data);
              Cache.setItem("User", this.state.user);
              this.props.navigation.navigate("CodeConfirmationPage");
              this.closeActivityIndicator();
            })
            .catch(err => {console.log(err);
               this.closeActivityIndicator();
               Alert.alert(
                "Error",
                 I18n.get("RegistrationUnsuccessful"),
                [
                   { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                      { cancelable: false }
                  );
            })
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
        <ImageBackground
          source={require("../../images/newBackground.png")}
          style={styles.fullBackgroundImage}
          imageStyle={styles.fullbackgroundImageStyle}
        >
          <KeyboardAvoidingView
            style={styles.registrationFormContainer}
            behavior="padding"
          >
            <View style={styles.topContainer}>
              <TouchableOpacity
                style={styles.backButtonStyle}
                onPress={this.backButtonClick}
              >
                <Image
                  source={require("../../images/backButton.png")}
                  style={styles.backButtonImageStyle}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.registerTextStyle}>{I18n.get("Sign Up")}</Text>
            <TextInput
              style={styles.firstTextInputStyle}
              autoCapitalize={"none"}
              placeholder={I18n.get("Firstname")}
              placeholderTextColor="white"
              returnKeyType={"next"}
              autoCorrect= {false}
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
                this.phone.focus();
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
            {/* <TextInput
              ref={input => {
                this.fourthTextInput = input;
              }}
              returnKeyType={"next"}
              onSubmitEditing={() => {
                this.fifithTextInput.focus();
              }}
              blurOnSubmit={false}
              style={styles.textInput}
              autoCapitalize={"none"}
             // keyboardType="numeric"
              placeholder={I18n.get("PhoneNo")}
              placeholderTextColor="white"
              onChangeText={text =>
                this.setState(state => ((state.user.phoneNo = text), state))
              }
            /> */}
             <TouchableWithoutFeedback>
              <PhoneInput style={styles.phoneTextInput}
                   ref={ref => {
                         this.phone = ref;
                   }}
                   returnKeyType={"next"}
                   onSubmitEditing={() => {
                       this.fifithTextInput.focus();
                   }}
                  //  keyboardType="phone-pad"
                   blurOnSubmit={false}
                   textStyle= {{color: "white"}}
                  // textProps={{ placeholder: "Phone Number" }}
                   onChangePhoneNumber={number =>
                  this.setState(state => ((state.user.phoneNo = number), state))
                }>
              </PhoneInput>
             </TouchableWithoutFeedback>
            
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
              placeholderTextColor="white" // value={ this.state.user.email  } // onChangeText={text => this.validate(text)}
              onChangeText={text =>
                this.setState(state => ((state.user.email = text), state))
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
              onChangeText={text => this.setState(state => ((state.user.email = text), state))} />
            
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
          {/* <Text
              style={{
                color: "white",
                marginLeft: "5%",
                marginTop: 20, 
                marginLeft: 90
              }} >
                {I18n.get('Accept terms and conditions')}
            </Text> */}
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
        </ImageBackground>
      </View>
 </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  topContainer: {
    height: "20%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //  backgroundColor: "green",
    marginTop: "20%"
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: "10%",
    height: "50%",
    marginLeft: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonImageStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: 'contain'
  },
  registrationFormContainer: {
    flex: 0.85,
    flexDirection: "column",
    // backgroundColor:'black',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%"
  },
  registerButton: {
    //height: "15%",
    width: "90%",
    // backgroundColor:'mediumseagreen',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  firstTextInputStyle: {
    height: "10%",
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end"
  },
  textInput: {
    height: "10%",
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end"
  },
  phoneTextInput: {
    height: "10%",
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    alignContent: "flex-end"
  },
  lastTextInputStyle: {
    height: "10%",
    width: "80%",
    marginTop: "7%",
    alignContent: "flex-end"
  },
  buttonContainer: {
    height: "8%",
    // backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  // activityIndicator: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   height: 80
  // },
  fullBackgroundImage: {
    flex: 1
  },
  checkboxContainer: {
    flexDirection: "row",
    // backgroundColor: 'black',
    height: "10%",
    justifyContent: "center",
    alignItems: "center"
    //marginTop: "5%"
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
  registerTextStyle: {
    marginTop: "2%",
    backgroundColor: "transparent",
    fontSize: 25,
    color: "white"
  },
  checkboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "15%"
  }
});
export default RegistrationPage;
