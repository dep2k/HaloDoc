import React from "react";
import { I18n } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Auth } from "aws-amplify";
import { Cache } from "aws-amplify";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { CreateDoctor } from "../../../Queries/DoctorAPI";
//import { SSL_OP_NO_TLSv1_2 } from "constants";
import Loader from "../../../ActivityIndicator";
import { Avatar } from "react-native-elements";

const base = "../../../images/";
const backgroundImage = require(base + "loginButtonImage.png");


class AdminAddDoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor: {
        name: "",
        speciality: "",
        profilePic: "",
        registrationId: "",
        phoneNo: "",
        email: "",
        homeTown: "",
        medicalCenter: "",
        department: "",
        address: "",
        password: "",
        adminEmail: ""
      },
      animating: false
    };
    this.backButtonClick = this.backButtonClick.bind(this);
    this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
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

  onRegisterButtonClick() {
    this._addDoctor();
  }

  _addDoctor() {
    const doc = this.state.doctor;
    const createDoctorInput = {
      name: this.state.doctor.name,
      speciality: this.state.doctor.speciality,
      profilePic: "profilePic",
      registrationId: this.state.doctor.registrationId,
      phoneNo: this.state.doctor.phoneNo,
      email: this.state.doctor.email,
      adminEmail: this.state.doctor.adminEmail,
      homeTown: this.state.doctor.homeTown,
      medicalCenter: this.state.doctor.medicalCenter,
      department: this.state.doctor.department,
      address: this.state.doctor.address
    };
    this.startActivityIndicator();
    if (doc.name && doc.adminEmail && doc.password && doc.phoneNo) {
      if (doc.password.length >= 8) {
        Auth.signUp({
          username: doc.name,
          password: doc.password,
          attributes: {
            phone_number: doc.phoneNo,
            email: doc.adminEmail,
            given_name: "abcd",
            family_name: "efgf"
          }
        })
          .then(data => {
            console.log(data);
            Cache.setItem("Doctor", this.state.doctor);
            API.graphql(graphqlOperation(CreateDoctor, createDoctorInput))
              .then(response => {
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              });

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
        <Text style={styles.drNameText}>{I18n.get("AddDoctorDetailes")}</Text>
        <View style={styles.formContainer}>
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("AdminEmail")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(
                  state => ((state.doctor.adminEmail = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Name")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.doctor.name = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Speciality")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(
                  state => ((state.doctor.speciality = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Address")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.doctor.address = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("RegistrationId")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(
                  state => ((state.doctor.registrationId = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>Phone No</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.doctor.phoneNo = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Email")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.doctor.email = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("HomeTown")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.doctor.homeTown = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("MedicalCenter")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(
                  state => ((state.doctor.medicalCenter = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.textInputContainer}>
            <Text style={styles.formText}>{I18n.get("Department")}</Text>
            <TextInput
              style={styles.formTextInputStyle}
              onChangeText={text =>
                this.setState(
                  state => ((state.doctor.department = text), state)
                )
              }
            />
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.buttonsContainer}>
            {/* <Text style={styles.passwordText}>{I18n.get("Password")}</Text>
            <TextInput
                style={styles.textInput}
            /> */}
            <Text style={styles.passwordText}>
              {I18n.get("CreatePassword")}
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text =>
                this.setState(state => ((state.doctor.password = text), state))
              }
            />
            <TouchableOpacity
              onPress={this.onRegisterButtonClick}
              style={styles.registerButton}
            >
              <ImageBackground
                source={backgroundImage}
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
        {this.state.animating && <Loader animating={this.state.animating} />}
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
    marginTop: "5%"
  },
  profilePic: {
    width: "18%",
    height: "7%",
    backgroundColor: "green"
  },

  textInputContainer: {
    flexDirection: "row",
    height: "10%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  formContainer: {
    height: "55%",
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "5%"
    // backgroundColor: 'yellow'
  },
  formText: {
    width: "35%",
    height: "80%",
    color: "#8BE0DE",
    marginLeft: "1%",
    marginTop: "6%",
    // backgroundColor: 'black',
    //justifyContent: "flex-end",
    alignSelf: "center"
    // textAlign: 'center'
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
    height: 40,
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
    paddingTop: "2%",
    marginTop: "2%"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderRadius: 20,
    backgroundColor: "#F8F8F8",
    marginBottom: 4,
    paddingHorizontal: "5%"
  },
  passwordText: {
    fontSize: 15,
    fontWeight: "normal",
    color: "#7C7B7B",
    marginBottom: 5,
    marginRight: "40%"
  }
});

export default AdminAddDoctorPage;
