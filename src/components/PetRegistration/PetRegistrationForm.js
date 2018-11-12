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
        origin: "Origin",
        product: "",
        date: "",
        feeding: "feeding",
        use: "Use",
        background: "Background",
        weight: "20Kg",
        vaccinations: [{ name: "PVC", date: "234567" }]
      },
      value: 0,
      animating: false,
      vacYesChecked: true,
      vacNoChecked: false,
      otherChecked: false,
      pvcChecked: false,
      tripleChecked: false,
      raceChecked: false,
      despaYesChecked: true,
      despaNoChecked: false,
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
  }
  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }

  saveButtonClick() {
    this.startActivityIndicator();

    Cache.getItem("User").then(user => {
      if (user) {
        const createPetInput = {
          username: user.userName,
          category: this.petType,
          name: this.state.pet.name,
          race: this.state.raceText,
          gender: this.state.sexText,
          age: this.state.pet.age,
          origin: this.state.pet.origin,
          use: this.state.pet.use,
          background: this.state.pet.background,
          weight: this.state.pet.weight,
          petImage: this.state.pet.petImage,
          color: this.state.pet.color,
          date: this.state.pet.date,
          feeding: this.state.pet.feeding,
          vaccinations: [{ name: "PVC", date: "234567" }]
        };
        API.graphql(graphqlOperation(CreatePet, createPetInput))
          .then(response => {
            console.log(response);
            Alert.alert(
              I18n.get("Success"),
              I18n.get("RegistrationSuccessful"),
              [
                {
                  text: "OK",
                  onPress: () => this.props.navigation.navigate("MainMenuPage")
                }
              ],
              { cancelable: false }
            );
            this.closeActivityIndicator();
          })
          .catch(err => {
            console.log(err);
            Alert.alert(
              "Error",
              I18n.get("RegistrationUnsuccessful"),
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
            this.closeActivityIndicator();
          });
      }
    });
    // username: user.userName,
    // category: this.state.pet.category,
    // petImage: this.state.pet.petImage,
    // name: this.state.pet.firstName,
    // race: this.state.raceText,
    // color: this.state.pet.color,
    // gender: this.state.sexText,
    // age: this.state.pet.age,
    // origin: this.state.pet.origin,
    // product: this.state.pet.product,
    // date: this.state.pet.product,
    // feeding: this.state.pet.feeding,
    // use: this.state.pet.use,
    // background: this.state.pet.background,
    // weight: this.state.pet.weight,
    // vaccinations: this.state.pet.vaccinations
  }

  saveAndRegisterButtonClick() {
    this.startActivityIndicator();

    Cache.getItem("User").then(user => {
      if (user) {
        const createPetInput = {
          username: user.userName,
          category: this.petType,
          name: this.state.pet.name,
          race: this.state.raceText,
          gender: this.state.sexText,
          age: this.state.pet.age,
          origin: this.state.pet.origin,
          use: this.state.pet.use,
          background: this.state.pet.background,
          weight: this.state.pet.weight,
          petImage: this.state.pet.petImage,
          color: this.state.pet.color,
          date: this.state.pet.date,
          feeding: this.state.pet.feeding,
          vaccinations: [{ name: "PVC", date: "234567" }]
        };
        API.graphql(graphqlOperation(CreatePet, createPetInput))
          .then(response => {
            console.log(response);
            Alert.alert(
              I18n.get("Success"),
              I18n.get("RegistrationSuccessful"),
              [
                {
                  text: "OK",
                  onPress: () => this.props.navigation.goBack(null) 
                }
              ],
              { cancelable: false }
            );
            this.closeActivityIndicator();
            
          })
          .catch(err => {
            console.log(err);
            Alert.alert(
              "Error",
              I18n.get("RegistrationUnsuccessful"),
              [{ text: "OK", onPress: () => console.log("OK Pressed") }],
              { cancelable: false }
            );
            this.closeActivityIndicator();
          });

       
      }
    });
  }
  //  componentDidMount(){
  //    this.startActivityIndicator();
  //  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  checkBoxClick(type) {
    if (type == "vacYesButton") {
      this.setState({ vacYesChecked: !this.state.vacYesChecked });
    } else if (type == "vacNoButton") {
      this.setState({ vacNoChecked: !this.state.vacNoChecked });
    } else if (type == "otherChecked") {
      this.setState({ otherChecked: !this.state.otherChecked });
    } else if (type == "pvcChecked") {
      this.setState({ pvcChecked: !this.state.pvcChecked });
    } else if (type == "tripleChecked") {
      this.setState({ tripleChecked: !this.state.tripleChecked });
    } else if (type == "raceChecked") {
      this.setState({ raceChecked: !this.state.raceChecked });
    } else if (type == "despaYesChecked") {
      this.setState({ despaYesChecked: !this.state.despaYesChecked });
    } else if (type == "despaNoChecked") {
      this.setState({ despaNoChecked: !this.state.despaNoChecked });
    }
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  renderVaccinationForm() {
    console.log(this.petType);
    if (this.petType == "cat") {
      return (
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("PVC")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pvcChecked}
              onPress={() => this.checkBoxClick("pvcChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("Triple")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.tripleChecked}
              onPress={() => this.checkBoxClick("tripleChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("Rage")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.raceChecked}
              onPress={() => this.checkBoxClick("raceChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("Other")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.otherChecked}
              onPress={() => this.checkBoxClick("otherChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
      );
    } else if (this.petType == "dog") {
      return (
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("TripleFeline")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.pvcChecked}
              onPress={() => this.checkBoxClick("pvcChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("RabiaFelina")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.tripleChecked}
              onPress={() => this.checkBoxClick("tripleChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("Other")}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.state.otherChecked}
              onPress={() => this.checkBoxClick("otherChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
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
              checked={this.state.pvcChecked}
              onPress={() => this.checkBoxClick("pvcChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
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
              checked={this.state.tripleChecked}
              onPress={() => this.checkBoxClick("tripleChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
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
              checked={this.state.otherChecked}
              onPress={() => this.checkBoxClick("otherChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
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
              checked={this.state.otherChecked}
              onPress={() => this.checkBoxClick("otherChecked")}
            />
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
        <NavBar onBackPress={this.backButtonClick} ></NavBar>
        {/* <View style={styles.headerContainer}>
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
        </View> */}
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
          {/* <Text style={styles.yesText}>{I18n.get("Yes")}</Text>
          <CheckBox
            center
            containerStyle={styles.checkboxContainerStyle}
            checkedIcon="dot-circle-o"
            checkedColor="grey"
            uncheckedColor="grey"
            uncheckedIcon="circle-o"
            checked={this.state.vacYesChecked}
            onPress={() => this.checkBoxClick("vacYesButton")}
          />

          <Text style={styles.noText}>{I18n.get("No")}</Text>
          <CheckBox
            center
            containerStyle={styles.checkboxContainerStyle}
            checkedIcon="dot-circle-o"
            checkedColor="grey"
            uncheckedColor="grey"
            uncheckedIcon="circle-o"
            checked={this.state.vacNoChecked}
            onPress={() => this.checkBoxClick("vacNoButton")}
          /> */}

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
              this.setState({ value: value });
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
              this.setState({ value: value });
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
              onChangeText={text =>
                this.setState(state => ((state.pet.date = text), state))
              }
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.feedingText}>{I18n.get("Feeding")}</Text>
            <TextInput
              style={styles.productTextInputStyle}
              placeholder={I18n.get("Feeding")}
              placeholderTextColor={"grey"}
              onChangeText={text =>
                this.setState(state => ((state.pet.feeding = text), state))
              }
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
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center"
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
    alignItems: "center"
  },

  originSelfText: {
    width: 100,
    fontSize: 16,
    alignSelf: "center",
    color: "#8BE0DE"
  },

  originText: {
    width: 100,
    fontSize: 16,
    alignSelf: "center",
    color: "#8BE0DE"
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
    marginTop: "5%",
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "2%",
    marginHorizontal: "10%",
    textAlign: "center"
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
    width: "20%",
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
    marginTop: 20
  },

  pvcText: {
    width: "16%",
    // height: 28,
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },
  horseVacText: {
    width: "30%",
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },

  despaText: {
    marginTop: "10%",
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
    width: 100,
    height: 30,
    color: "grey"
  },

  productTextInputStyle: {
    width: 100,
    height: 30,
    color: "grey"
  },

  productText: {
    width: 80,
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },

  feedingText: {
    width: 110,
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },
  fetchaText: {
    width: "16%",
    //height: 28,
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
    alignItems: "center"
  },
  saveButtonStyle: {
    height: 40,
    width: "98%",
    borderRadius: 20,
    backgroundColor: "seagreen",
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
    backgroundColor: "seagreen",
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
    alignItems: "center"
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
