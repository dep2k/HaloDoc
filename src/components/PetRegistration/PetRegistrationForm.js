import React from "react";
import {
  Alert,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";
import { NavBar } from "../Reusable/NavBar";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreatePet } from "../../Queries/PetAPI";
import { CheckBox } from "react-native-elements";
import { Avatar } from "react-native-elements";
import Modal from "react-native-modal";
import Loader from "../../ActivityIndicator";
import {
  catRaceListdata,
  dogRaceListdata,
  horseRaceListdata
} from "../../data/FelinoData";
import { sexData } from "../../data/FelinoData";

const base = "../../images/";
//let data = this.ref.flatList.data;
const buttonImage = require(base + "loginButtonImage.png");
const dropDownImage = require(base + "dropDownIcon.png");
const navBarImage = require(base + "navbarImage.png");
const backButtonImage = require(base + "BackButtonShape.png");
//const raceButton = this.props.

var radio_props = [{ label: "Yes", value: 0 }, { label: "No", value: 1 }];

class DataListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.cellContainer}
      >
        <Text style={styles.nameText}>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

class PetRegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.dropDownType = "WhatEverIsType";
    const { navigation } = this.props;
    this.petType = navigation.getParam("petType");

    this.state = {
      pet: {
        category: "",
        petImage: "petImage",
        name: "",
        color: "",
        age: "",
        origin: "",
        product: "",
        date: "",
        feeding: "",
        use: "Use",
        background: "Background",
        weight: "20Kg",
        dogVaccinations: {
          Pvc: { isChecked: false, date: null, name: null },
          Triple: { isChecked: false, date: null, name: null },
          Rage: { isChecked: false, date: null, name: null },
          Other: { isChecked: false, date: null, name: null }
        },
        catVaccinations: {
          TripleViral: { isChecked: false, date: null, name: null },
          FelineRage: { isChecked: false, date: null, name: null },
          Other: { isChecked: false, date: null, name: null }
        },
        horseVaccinations: {
          Influenza: { isChecked: false, date: null, name: null },
          Tetanus: { isChecked: false, date: null, name: null },
          Encephalitis: { isChecked: false, date: null, name: null },
          Other: { isChecked: false, date: null, name: null }
        }
      },
      vaccvalue: 0,
      despavalue: 0,
      animating: false,
      modalVisible: false,
      dropDownData: [],
      dataType: "",
      textColor: "#A9A9A9",
      raceText: "Select Race",
      sexText: "Select Gender",
      origin: ""
    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);
    this.saveAndRegisterButtonClick = this.saveAndRegisterButtonClick.bind(
      this
    );
    this.listButtonClick = this.listButtonClick.bind(this);
   // this.noDespaClick = this.noDespaClick.bind(this);
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }
  
  saveButtonClick() {
   // this.startActivityIndicator();
    const petInput = {
      dogVaccinations: {
        Pvc: {
          isChecked: this.state.pet.dogVaccinations.Pvc.isChecked,
          name: this.state.pet.dogVaccinations.Pvc.name,
          date: this.state.pet.dogVaccinations.Pvc.date
        }
      }
    };
    console.log(petInput)
    console.log(
      this.state.pet.feeding,
      this.state.pet.date,
      this.state.pet.product
    )
    this.props.navigation.navigate("MainMenuPage");
    // if (
    //   this.state.value == 0 &&
    //   this.state.pet.catVaccinations &&
    //   this.state.pet.dogVaccinations &&
    //   this.state.pet.horseVaccinations
    // ) {
    // }

    // Cache.getItem("User").then(user => {
    //   if (user) {
    //     const createPetInput = {
    //       username: "TestUser",
    //       category: this.petType,
    //       name: this.state.pet.name,
    //       race: this.state.raceText,
    //       gender: this.state.sexText,
    //       age: this.state.pet.age,
    //       origin: this.state.pet.origin,
    //       use: this.state.pet.use,
    //       background: this.state.pet.background,
    //       weight: this.state.pet.weight,
    //       petImage: this.state.pet.petImage,
    //       color: this.state.pet.color,
    //       date: this.state.pet.date,
    //       feeding: this.state.pet.feeding,
    //       vaccinations: this.state.pet.vaccinations
    //     };
    //     API.graphql(graphqlOperation(CreatePet, createPetInput))
    //       .then(response => {
    //         console.log(response);
    //         Alert.alert(
    //           I18n.get("Success"),
    //           I18n.get("RegistrationSuccessful"),
    //           [
    //             {
    //               text: "OK",
    //               onPress: () => this.props.navigation.navigate("MainMenuPage")
    //             }
    //           ],
    //           { cancelable: false }
    //         );
    //         this.closeActivityIndicator();
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         Alert.alert(
    //           "Error",
    //           I18n.get("RegistrationUnsuccessful"),
    //           [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    //           { cancelable: false }
    //         );
    //         this.closeActivityIndicator();
    //       });
    //   }
    // });
  }

  saveAndRegisterButtonClick() {
    this.props.navigation.goBack(null)
    // this.startActivityIndicator();

    // Cache.getItem("User").then(user => {
    //   if (user) {
    //     const createPetInput = {
    //       username: user.userName,
    //       category: this.petType,
    //       name: this.state.pet.name,
    //       race: this.state.raceText,
    //       gender: this.state.sexText,
    //       age: this.state.pet.age,
    //       origin: this.state.pet.origin,
    //       use: this.state.pet.use,
    //       background: this.state.pet.background,
    //       weight: this.state.pet.weight,
    //       petImage: this.state.pet.petImage,
    //       color: this.state.pet.color,
    //       date: this.state.pet.date,
    //       feeding: this.state.pet.feeding,
    //       catVaccinations: {},
    //       vaccinations: [{ name: "PVC", date: "254534" }]
    //     };
    //     API.graphql(graphqlOperation(CreatePet, createPetInput))
    //       .then(response => {
    //         console.log(response);
    //         Alert.alert(
    //           I18n.get("Success"),
    //           I18n.get("RegistrationSuccessful"),
    //           [
    //             {
    //               text: "OK",
    //               onPress: () => this.props.navigation.goBack(null)
    //             }
    //           ],
    //           { cancelable: false }
    //         );
    //         this.closeActivityIndicator();
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         Alert.alert(
    //           "Error",
    //           I18n.get("RegistrationUnsuccessful"),
    //           [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    //           { cancelable: false }
    //         );
    //         this.closeActivityIndicator();
    //       });
    //   }
    // });
  }
  //  componentDidMount(){
  //    this.startActivityIndicator();
  //  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  checkBoxClick(type) {
    if (this.state.vaccvalue == 0) {
      if (type == "CatOther") {
        this.setState(
          state => (
            (state.pet.catVaccinations.Other.isChecked = !this.state.pet
              .catVaccinations.Other.isChecked),
            state
          )
        );
      } else if (type == "TripleViral") {
        this.setState(
          state => (
            (state.pet.catVaccinations.TripleViral.isChecked = !this.state.pet
              .catVaccinations.TripleViral.isChecked),
            state
          )
        );
      } else if (type == "FelineRage") {
        this.setState(
          state => (
            (state.pet.catVaccinations.FelineRage.isChecked = !this.state.pet
              .catVaccinations.FelineRage.isChecked),
            state
          )
        );
      } else if (type == "DogOther") {
        this.setState(
          state => (
            (state.pet.dogVaccinations.Other.isChecked = !this.state.pet
              .dogVaccinations.Other.isChecked),
            state
          )
        );
      } else if (type == "PVC") {
        this.setState(
          state => (
            (state.pet.dogVaccinations.Pvc.isChecked = !this.state.pet
              .dogVaccinations.Pvc.isChecked),
            state
          )
        );
      } else if (type == "Rage") {
        this.setState(
          state => (
            (state.pet.dogVaccinations.Rage.isChecked = !this.state.pet
              .dogVaccinations.Rage.isChecked),
            state
          )
        );
      } else if (type == "Triple") {
        this.setState(
          state => (
            (state.pet.dogVaccinations.Triple.isChecked = !this.state.pet
              .dogVaccinations.Triple.isChecked),
            state
          )
        );
      } else if (type == "Influenza") {
        this.setState(
          state => (
            (state.pet.horseVaccinations.Influenza.isChecked = !this.state.pet
              .horseVaccinations.Influenza.isChecked),
            state
          )
        );
      } else if (type == "Tetanus") {
        this.setState(
          state => (
            (state.pet.horseVaccinations.Tetanus.isChecked = !this.state.pet
              .horseVaccinations.Tetanus.isChecked),
            state
          )
        );
      } else if (type == "Encephalitis") {
        this.setState(
          state => (
            (state.pet.horseVaccinations.Encephalitis.isChecked = !this.state
              .pet.horseVaccinations.Encephalitis.isChecked),
            state
          )
        );
      } else if (type == "Other") {
        this.setState(
          state => (
            (state.pet.horseVaccinations.Other.isChecked = !this.state.pet
              .horseVaccinations.Other.isChecked),
            state
          )
        );
      }
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderVaccinationForm() {
    console.log(this.petType);
    if (this.petType == "dog") {
      return (
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("PVC")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.dogVaccinations.Pvc.isChecked}
              onPress={() => this.checkBoxClick("PVC")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => ((state.pet.dogVaccinations.Pvc.date = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("Triple")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.dogVaccinations.Triple.isChecked}
              onPress={() => this.checkBoxClick("Triple")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.dogVaccinations.Triple.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("Rage")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.dogVaccinations.Rage.isChecked}
              onPress={() => this.checkBoxClick("Rage")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => ((state.pet.dogVaccinations.Rage.date = text), state)
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("Other")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.dogVaccinations.Other.isChecked}
              onPress={() => this.checkBoxClick("DogOther")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.dogVaccinations.Other.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
      );
    } else if (this.petType == "cat") {
      return (
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("TripleViral")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.catVaccinations.TripleViral.isChecked}
              onPress={() => this.checkBoxClick("TripleViral")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.catVaccinations.TripleViral.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("FelineRage")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.catVaccinations.FelineRage.isChecked}
              onPress={() => this.checkBoxClick("FelineRage")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.catVaccinations.FelineRage.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.dogVacText}>{I18n.get("Other")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.catVaccinations.Other.isChecked}
              onPress={() => this.checkBoxClick("CatOther")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.catVaccinations.Other.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
      );
    } else if (this.petType == "horse") {
      return (
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.horseVacText}>{I18n.get("Influenza")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.horseVaccinations.Influenza.isChecked}
              onPress={() => this.checkBoxClick("Influenza")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.horseVaccinations.Influenza.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.horseVacText}>{I18n.get("Tetanus")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.horseVaccinations.Tetanus.isChecked}
              onPress={() => this.checkBoxClick("Tetanus")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.horseVaccinations.Tetanus.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.horseVacText}>{I18n.get("Encephalitis")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.horseVaccinations.Encephalitis.isChecked}
              onPress={() => this.checkBoxClick("Encephalitis")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.horseVaccinations.Encephalitis.date = text),
                    state
                  )
                )
              }
            />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.horseVacText}>{I18n.get("Other")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pet.horseVaccinations.Other.isChecked}
              onPress={() => this.checkBoxClick("Other")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(
                  state => (
                    (state.pet.horseVaccinations.Other.date = text), state
                  )
                )
              }
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
      );
    }
  }

  listButtonClick(type) {
    let dataSource;

    if (type == "RaceDD") {
      switch (this.petType) {
        case "dog":
          dataSource = dogRaceListdata;
          break;
        case "cat":
          dataSource = catRaceListdata;

          break;
        case "horse":
          dataSource = horseRaceListdata;
          break;
      }
      this.dropDownType = "raceDropDownData";
      this.setState({
        dropDownData: dataSource,
        modalVisible: true
      });
    } else if (type == "SexDD" && this.petType) {
      dataSource = sexData;
      this.dropDownType = "sexDropDownData";
      this.setState({
        dropDownData: dataSource,
        modalVisible: true
      });
    }
  }

  render() {
    return (
      <View style = {styles.mainContainer}>
      <NavBar onBackPress={this.backButtonClick} />
      <ScrollView style={styles.scrollview}
           horizontal= {false}>
        <TouchableWithoutFeedback
          onPress={() =>
            this.setState({
              modalVisible: false
            })
          }
        >
          <Modal backdropOpacity={0.5} isVisible={this.state.modalVisible}>
            <FlatList
              contentContainerStyle={styles.flatListContentContainerStyle}
              ItemSeparatorComponent={this.renderSeparator}
              data={this.state.dropDownData}
              renderItem={({ item, index }) => {
                return (
                  <DataListItem
                    item={item}
                    index={index}
                    onPress={() => {
                      console.log(this.dropDownType);
                      if (this.dropDownType == "raceDropDownData") {
                        this.setState({
                          raceText: item.name,
                          modalVisible: false
                        });
                      } else if (this.dropDownType == "sexDropDownData") {
                        this.setState({
                          sexText: item.name,
                          modalVisible: false
                        });
                      }
                    }}
                  />
                );
              }}
            />
            }
          </Modal>
        </TouchableWithoutFeedback>
          <View style = {styles.avatar}>
           <Avatar
            large
            rounded
            source={{
              uri:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"
            }}
            onPress={() => console.log("Works!")}
          /></View>
       
        <Text style={styles.clinicHistoryText}>
          {I18n.get("ClinicHistory")}
        </Text>
        <View style={styles.clinicHistoryContainer}>
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Name")}</Text>
            <TextInput
              style={styles.originTextInputStyle}
              placeholder={I18n.get("NameOfPet")}
              placeholderTextColor="grey"
              onChangeText={text =>
                this.setState(state => ((state.pet.name = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Race")}</Text>
            <TouchableOpacity
              style={styles.dropDownButtonStyle}
              onPress={() => this.listButtonClick("RaceDD")}
            >
              <Text style={styles.dropDownButtonTextStyle}>
                {this.state.raceText}
              </Text>
              <Image style={styles.dropDownIconStyle} source={dropDownImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Color")}</Text>
            <TextInput
              style={styles.originTextInputStyle}
              placeholder={I18n.get("Color")}
              placeholderTextColor="grey"
              onChangeText={text =>
                this.setState(state => ((state.pet.color = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Sex")}</Text>
            <TouchableOpacity
              style={styles.dropDownButtonStyle}
              onPress={() => this.listButtonClick("SexDD")}
            >
              <Text style={styles.dropDownButtonTextStyle}>
                {this.state.sexText}
              </Text>
              <Image style={styles.dropDownIconStyle} source={dropDownImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Age")}</Text>
            <TextInput
              style={styles.originTextInputStyle}
              placeholder={I18n.get("WriteAge")}
              placeholderTextColor="grey"
              onChangeText={text =>
                this.setState(state => ((state.pet.age = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originSelfText}>{I18n.get("Origin")}</Text>
            {/* <TouchableOpacity
              style={styles.originTextInputStyle}
              onPress={() => console.log("OriginButtonClicked")}
            >
              <Text style={styles.dropDownButtonTextStyle}>
                {I18n.get("Origin")}
              </Text>
              <Image style={styles.dropDownIconStyle} source={dropDownImage} />
            </TouchableOpacity> */}
            <TextInput
              style={styles.originTextInputStyle}
              placeholder={I18n.get("Origin")}
              placeholderTextColor="grey"
              onChangeText={text =>
                this.setState(state => ((state.pet.origin = text), state))
              }
            />
          </View>
          <View style={styles.lastLineWithMarginBottom} />
        </View>

        <Text style={styles.vaccinationText}>{I18n.get("Vaccination")}</Text>
        <View style={styles.yesNoContainer}>
        
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            labelColor={"grey"}
            selectedLabelColor={"grey"}
            labelStyle={{ fontSize: 15 }}
            buttonColor={"grey"}
            buttonStyle={{ spacing: 20 }}
            selectedButtonColor={"grey"}
            buttonSize={10}
            buttonOuterSize={20}
            animation={true}
            onPress={value => {
              this.setState({ vaccvalue: value });
              console.log(value);
              if (value == 1) {
                this.setState(
                  state => (
                    ((state.pet.catVaccinations.FelineRage.isChecked = false),
                    (state.pet.catVaccinations.FelineRage.date = null)),
                    ((state.pet.catVaccinations.TripleViral.isChecked = false),
                    (state.pet.catVaccinations.TripleViral.date = null)),
                    ((state.pet.catVaccinations.Other.isChecked = false),
                    (state.pet.catVaccinations.Other.date = null)),
                    ((state.pet.dogVaccinations.Pvc.isChecked = false),
                    (state.pet.dogVaccinations.Pvc.date = null)),
                    ((state.pet.dogVaccinations.Triple.isChecked = false),
                    (state.pet.dogVaccinations.Triple.date = null)),
                    ((state.pet.dogVaccinations.Rage.isChecked = false),
                    (state.pet.dogVaccinations.Rage.date = null)),
                    ((state.pet.dogVaccinations.Other.isChecked = false),
                    (state.pet.dogVaccinations.Other.date = null)),
                    ((state.pet.horseVaccinations.Other.isChecked = false),
                    (state.pet.horseVaccinations.Other.date = null)),
                    ((state.pet.horseVaccinations.Influenza.isChecked = false),
                    (state.pet.horseVaccinations.Influenza.date = null)),
                    ((state.pet.horseVaccinations.Tetanus.isChecked = false),
                    (state.pet.horseVaccinations.Tetanus.date = null)),
                    ((state.pet.horseVaccinations.Encephalitis.isChecked = false),
                    (state.pet.horseVaccinations.Encephalitis.date = null)),
                    state
                  )
                );
              }
            }}
          />
        </View>

        {this.renderVaccinationForm()}

        <Text style={styles.despaText}>{I18n.get("Despa")}</Text>
        <View style={styles.yesNoContainer}>
          <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            labelColor={"grey"}
            selectedLabelColor={"grey"}
            labelStyle={{ fontSize: 15 }}
            buttonColor={"grey"}
            buttonStyle={{ spacing: 20 }}
            selectedButtonColor={"grey"}
            buttonSize={10}
            buttonOuterSize={20}
            animation={true}
            onPress={value => {
              this.setState({ despavalue: value });
              console.log(value);
              if (value == 1) {
                this.setState(
                  state => (
                    (state.pet.product = null),
                    (state.pet.feeding = null),
                    (state.pet.date = null),
                    state
                  )
                );
              }
            }}
          />
        </View>
        <View style={styles.despaContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.feedingText}>{I18n.get("Product")}</Text>
            <TextInput
              style={styles.productTextInputStyle}
              placeholder={I18n.get("Product")}
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(state => ((state.pet.product = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.feedingText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text => {
                if (this.state.despavalue == 0) {
                  this.setState(state => ((state.pet.date = text), state));
                } else if (this.state.despavalue == 1) {
                  this.setState(state => ((state.pet.date = null), state));
                }
              }}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.feedingText}>{I18n.get("Feeding")}</Text>
            <TextInput
              style={styles.productTextInputStyle}
              placeholder={I18n.get("Feeding")}
              placeholderTextColor={"grey"}
              onChangeText={text => {
                if (this.state.despavalue == 0) {
                  this.setState(state => ((state.pet.feeding = text), state));
                } else if (this.state.despavalue == 1) {
                  this.setState(state => ((state.pet.feeding = null), state));
                }
              }}
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={styles.saveButtonStyle}
            onPress={this.saveButtonClick}
          >
            <ImageBackground
              source={buttonImage}
              style={styles.buttonImageBackgroundStyle}
              imageStyle={styles.buttonImageBackgroundImageStyle}
            >
              <Text style={styles.saveButtonTextStyle}>{I18n.get("Save")}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveAndRegisterButton}
            onPress={this.saveAndRegisterButtonClick}
          >
            <ImageBackground
              source={buttonImage}
              style={styles.buttonImageBackgroundStyle}
              imageStyle={styles.buttonImageBackgroundImageStyle}
            >
              <Text style={styles.saveAndRegisterText}>
                {I18n.get("SaveAndRegister")}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
        {this.state.animating && <Loader animating={this.state.animating} />}
      </ScrollView>
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
    flex:1
  },

  scrollview: {
    flexDirection: "column",
    backgroundColor: "white",
    alignSelf: 'stretch',
    marginBottom: 20
  },

  headerContainer: {
    height: 60,
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
  avatar: {
    height: 80, 
    width: "100%",
    justifyContent: "center", 
    alignItems: 'center'
  },

  clinicHistoryText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "5%",
    marginTop: "10%",
    marginHorizontal: "10%",
    textAlign: "center"
  },
  clinicHistoryContainer: {
    height: 270,
    width: "90%",
    marginHorizontal: "5%"
   
  },

  TextInputContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    alignItems: "center",
   // backgroundColor: "yellow"
  },

  originSelfText: {
    width: "31%",
    fontSize: 14,
    alignSelf: "center",
    color: "#8BE0DE",
    //backgroundColor: 'black'
  },

  originText: {
    width: "30%",
    fontSize: 14,
    alignSelf: "center",
    color: "#8BE0DE",
    marginRight:3,
    //backgroundColor: 'black'
  },

  lastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
  },

  lastLineWithMarginBottom: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey",
    marginBottom: 5
  },

  backButtonStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 40,
    marginLeft: 20,
    marginTop: 15,
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

  vaccinationText: {
    marginTop:5,
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "2%",
    marginHorizontal: "10%",
    textAlign: "center",
   // backgroundColor: "black"
  },

  yesNoContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start"
    // backgroundColor : "black"
  },

  yesText: {
    fontSize: 15,
    color: "darkgrey",
    marginTop: 4
  },

  noText: {
    fontSize: 15,
    color: "darkgrey",
    marginTop: 4,
    marginLeft: 0
  },

  checkboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "12%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -10
  },

  vacCheckboxContainerStyle: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    width: "18%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
     marginLeft: -10
  },

  vaccinationContainer: {
    height: 175,
    width: "90%",
    marginHorizontal: "5%"
    // backgroundColor : "grey"
  },

  firstTextInputContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10
  },

  pvcText: {
    width: "17%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 2,
    //backgroundColor: "orange",
    fontSize: 14
  },
  dogVacText: {
    width: "20%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 10,
   // backgroundColor: "green",
    fontSize: 14
  },
  horseVacText: {
    width: "34%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 10,
   // backgroundColor: "green",
    fontSize:14
  },

  despaText: {
    marginTop:15,
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "2%",
    marginHorizontal: "10%",
    textAlign: "center"
  },

  despaContainer: {
    height: 150,
    width: "90%",
    marginHorizontal: "5%"
  },

  vaccAndDespatextInputStyle: {
    width: "35%",
    height: 30,
    //color: "grey",
    //backgroundColor:"yellow",
    fontSize:13
  },

  productTextInputStyle: {
    width: "35%",
    height: 30,
    color: "grey",
    fontSize:13
   // backgroundColor: "grey"
  },

  productText: {
    width: "13%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },

  feedingText: {
    width: "36%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15,
   // backgroundColor: "black",
    fontSize: 14
  },
  fetchaText: {
    width: "16%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },
  saveButtonContainer: {
    flexDirection: "column",
    marginTop: "15%",
    width: "90%",
    marginHorizontal: "5%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "yellow"
  },
  saveButtonStyle: {
    height: 40,
    width: "98%",
    borderRadius: 20,
    //backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center"
  },
  saveButtonTextStyle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"
  },
  saveAndRegisterButton: {
    height: 40,
    width: "98%",
    borderRadius: 20,
    //backgroundColor: "seagreen",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  saveAndRegisterText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold"
  },

  cellContainer: {
    height: 30,
    marginHorizontal: "5%"
  },

  originTextInputStyle: {
    flexDirection: "row",
    width: "70%",
    height: 30,
    color: "grey",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize:13
  },

  dropDownButtonStyle: {
    flexDirection: "row",
    width: "70%",
    height: 30,
    justifyContent: "space-between",
    alignItems: "center"
  },
  dropDownButtonTextStyle: {
    fontSize: 14,
    alignSelf: "center",
    color: "grey"
  },

  dropDownIconStyle: {
    height: 10,
    width: 10
  },

  listText: {
    fontSize: 20,
    marginLeft: 150
  },

  nameText: {
    color: "#8BE0DE",
    fontSize: 18,
    padding: 2
  },

  flatListContentContainerStyle: {
    alignSelf: "center",
    width: 300,
    marginTop: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center"
  },

  buttonImageBackgroundStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonImageBackgroundImageStyle: {
    borderRadius: 20
  }
});
export default PetRegistrationForm;
