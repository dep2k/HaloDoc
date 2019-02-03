import React from "react";
import { I18n } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Auth } from "aws-amplify";
import { Cache } from "aws-amplify";
import { NavBar } from "../../Reusable/NavBar";
import DropDown from "../../PetRegistration/DropDown";
import { getSpecialityData } from "../../PetRegistration/DropDownData";
import FormDropDownInput from "../../PetRegistration/FormDropDownInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import {launchPhotoLibrary,uploadImage} from '../../ImageHelper';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
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
const navBarImage = require(base + "navbarImage.png");
const placeHolderImage = require(base + "placeholderImage.png");


class AdminAddDoctorPage extends React.Component {
  constructor(props) {
    super(props);

    defaultValue = null;
    this.state = {
      doctor: {
        name: defaultValue,
        userName: defaultValue,
        speciality: defaultValue,
        profilePic: defaultValue,
        registrationId: defaultValue,
        phoneNo: defaultValue,
        email: defaultValue,
        homeTown: defaultValue,
        medicalCenter: defaultValue,
        department: defaultValue,
        address: defaultValue,
        password: defaultValue,
        adminEmail: defaultValue,
        base64:defaultValue,
      },
      animating: false,
      phncode: "+57",
      docSpecialityData: [],
      modalVisible: false
    };
    this.backButtonClick = this.backButtonClick.bind(this);
    this.onRegisterButtonClick = this.onRegisterButtonClick.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  onPressDDList(item, type) {
    if (type == "SpecialityDD") {
      const speciality = item.name;
      this.specialityValue = item.value;
      this.setState(
        state => (
          (state.doctor.speciality = speciality),
          (state.modalVisible = false),
          state
        )
      );
    }
  }
  onPress() {
    const specialityData = getSpecialityData();
		console.log('TCL: AdminAddDoctorPage -> onPress -> specialityData', specialityData)
    this.showDropDown(specialityData);
  }

  showDropDown(data) {
    console.log(data);
    this.setState(
      state => (
        (state.modalVisible = true), (state.docSpecialityData = data), state
      )
    );
  }

  hideModal() {
    console.log("hiding");
    this.setState(state => ((state.modalVisible = false), state));
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  onRegisterButtonClick() {
    console.log("DoctorAdded");
    this._addDoctor();
    
  }

  _addDoctor() {
    const doc = this.state.doctor;
    let s3Object ;
    if(base64){
      s3Object = {
        bucket: "Doctors",
        key: this.state.doctor.name
      }
    } else{
      s3Object = null;
    }
    const createDoctorInput = {
      doctorId: this.state.doctor.name,
      name: this.state.doctor.name,
      userName: this.state.doctor.userName,
      speciality: this.specialityValue,
      profilePic: "profilePic",
      registrationId: this.state.doctor.registrationId,
      phoneNo: this.state.doctor.phoneNo,
      email: this.state.doctor.email,
      adminEmail: this.state.doctor.adminEmail,
      homeTown: this.state.doctor.homeTown,
      medicalCenter: this.state.doctor.medicalCenter,
      department: this.state.doctor.department,
      address: this.state.doctor.address,
      s3Object: s3Object
    };
    this.startActivityIndicator();
    
    if (doc.name && doc.adminEmail && doc.password && doc.phoneNo) {
      if (doc.password.length >= 8) {
        Auth.signUp({
          username: doc.userName,
          password: doc.password,
          attributes: {
            phone_number: this.state.phncode + doc.phoneNo,
            email: doc.adminEmail,
            given_name: "abcd",
            family_name: "efgf",
            "custom:userType": "DOCTOR"
          }
        })
          .then(data => {
            console.log(data);
            API.graphql(graphqlOperation(CreateDoctor, createDoctorInput))
              .then(response => {
                console.log(response);
                if(base64){
                  const s3Object = response.data.createDoctor.s3Object;
                  const bucket = s3Object.bucket;
                  const key =  s3Object.key + ".jpg";
                  uploadImage(base64,bucket,key).then((result)=>{
                    console.log("​AdminAddDoctorPage -> _addDoctor -> Image Upload Result", result);
                    }).catch((error)=>{
                      console.log("​AdminAddDoctorPage -> _addDoctor -> Image Upload Error", error)
                    });
                }
              }).catch(err => {
                console.log(err);
              });

            this.props.navigation.navigate("CodeConfirmationPage", {
              username: doc.userName,
              pageType: "DocRegistrationPage"
            });
            console.log(doc.userName);
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

  onAvatarClick(){
    console.log("Works!")
    launchPhotoLibrary().then((result)=>{
      base64 = result.base64;
      if(base64) {
        this.setState(
          state => ((state.doctor.base64 = base64), state)
        )
      }
			console.log("​AdminAddDoctorPage -> onAvatarClick -> result", result)
    }).catch((error)=>{
		console.log("​AdminAddDoctorPage -> onAvatarClick -> error", error);
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar onBackPress={this.backButtonClick} />
        <KeyboardAwareScrollView style={styles.scrollview}>
          <View style={styles.avatar}>
            <Avatar
              large
              rounded
              source={{uri: `data:image/jpg;base64,${this.state.doctor.base64}`}}
              onPress={() => this.onAvatarClick()}
              activeOpacity={0.7}
            />
          </View>
          <DropDown
            dropDownType={"SpecialityDD"}
            modalVisible={this.state.modalVisible}
            dropDownData={this.state.docSpecialityData}
            onModalBackPress={() => {this.hideModal()}}
            onPressDDList={(item, type) => this.onPressDDList(item, type)}
          />

          <View style={styles.headindTextStyle}>
            <Text style={styles.drNameText}>
              {I18n.get("AddDoctorDetailes")}
            </Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("AdminEmail")}</Text>
              <TextInput
                style={styles.formTextInputStyle}
                autoCapitalize={"none"}
                returnKeyType={"next"}
                autoCorrect={false}
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
                blurOnSubmit={false}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.adminEmail = text), state)
                  )
                }
              />
            </View>
            <View style={styles.lastLineStyle} />
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("NameOfDoctor")}</Text>
              <TextInput
                style={styles.formTextInputStyle}
                ref={input => {
                  this.secondTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.thirdTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={text =>
                  this.setState(state => ((state.doctor.name = text), state))
                }
              />
            </View>
            <View style={styles.lastLineStyle} />

            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("Username")}</Text>
              <TextInput
                ref={input => {
                  this.thirdTextInput = input;
                }}
                returnKeyType={"next"}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                style={styles.formTextInputStyle}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.userName = text), state)
                  )
                }
              />
            </View>
            <View style={styles.lastLineStyle} />
            <FormDropDownInput
              titleLabel={I18n.get("Speciality")}
              dropDownValue={this.state.doctor.speciality}
              onPress={() => this.onPress()}
            />
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("Address")}</Text>
              <TextInput
                style={styles.formTextInputStyle}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.sixthTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
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
                ref={input => {
                  this.sixthTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.seventhTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.registrationId = text), state)
                  )
                }
              />
            </View>
            <View style={styles.lastLineStyle} />
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("PhoneNo")}</Text>
              <Text style={styles.phnCodeText}>{this.state.phncode}</Text>
              <TextInput
                style={styles.formTextInputStyle}
                ref={input => {
                  this.seventhTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.eighthTextInput.focus();
                }}
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
                ref={input => {
                  this.eighthTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.ninthTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
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
                ref={input => {
                  this.ninthTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.tenthTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.homeTown = text), state)
                  )
                }
              />
            </View>
            <View style={styles.lastLineStyle} />
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("MedicalCenter")}</Text>
              <TextInput
                style={styles.formTextInputStyle}
                ref={input => {
                  this.tenthTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.eleventhTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
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
                ref={input => {
                  this.eleventhTextInput = input;
                }}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  this.twelvethTextInput.focus();
                }}
                blurOnSubmit={false}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.department = text), state)
                  )
                }
              />
            </View>
            <View style={styles.lastLineStyle} />
            <View style={styles.textInputContainer}>
              <Text style={styles.formText}>{I18n.get("Password")}</Text>
              <TextInput
                ref={input => {
                  this.twelvethTextInput = input;
                }}
                style={styles.formTextInputStyle}
                autoCapitalize={"none"}
                autoCorrect={false}
                onChangeText={text =>
                  this.setState(
                    state => ((state.doctor.password = text), state)
                  )
                }
              />
            </View>
            <View style={styles.LastlastLineStyle} />
            <View style={styles.buttonsContainer}>
              {/* <Text style={styles.passwordText}>
              {I18n.get("CreatePassword")}
            </Text>
            <TextInput
              style={styles.textInput}
              onChangeText={text =>
                this.setState(state => ((state.doctor.password = text), state))
              }
            /> */}
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
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1
  },

  emptySpace: {
    height: 120
  },
  scrollview: {
    flexDirection: "column",
    backgroundColor: "white",
    alignSelf: "stretch",
    marginBottom: 20,
   // height: 1000,
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
    backgroundColor: "blue",
    width: 40,
    height: 40,
    marginLeft: "5%",
    marginTop: "4%",
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonImageStyle: {
    width: "50%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  },
  avatar: {
    height: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  headindTextStyle: {
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black"
  },

  drNameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#A3C852",
    marginTop: "5%"
    // textAlign: 'center'
  },
  profilePic: {
    width: "18%",
    height: "7%",
    backgroundColor: "green"
  },

  textInputContainer: {
    flexDirection: "row",
    height: 45,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  formContainer: {
    flex: 0.7,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: "5%"
    //backgroundColor: 'yellow'
  },
  formText: {
    width: "35%",
    color: "#8BE0DE",
    marginLeft: "1%",
    fontSize: 14,
    alignSelf: "center"
  },
  formTextInputStyle: {
    width: "63%",
    height: 45,
    justifyContent: "flex-end",
    alignItems: "center",
    color: "grey",
    //  backgroundColor: 'pink',
    fontSize: 14
  },
  lastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
  },
  LastlastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey",
    marginBottom: 30
  },
  phnCodeText: {
    color: "grey",
    width: "10%",
    alignSelf: 'center',
   // backgroundColor : 'black'
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
    marginBottom: 15,
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
