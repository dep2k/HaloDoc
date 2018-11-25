import React from "react";
import {
  Alert,
  View,
  ScrollView,
  Text,

} from "react-native";

import { NavBar } from "../Reusable/NavBar";
import InfoPanel from "./InfoPanel";
import VaccinationPanel from './VaccinationPanel';
import DespaPanel from './DespaPanel';
import DropDown from './DropDown';

import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreatePet } from "../../Queries/PetAPI";

import Loader from "../../ActivityIndicator";
import { petRaceListData } from "./DropDownData";
import { genderData } from './DropDownData';
import { vaccinationsDict } from "./VaccinationsData";
import ButtonsPanel from "./ButtonsPanel";
import { styles } from './Styles';
const base = "../../images/";



class PetRegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.dropDownType = [];
    const { navigation } = this.props;
    this.petType = navigation.getParam("petType");
    defaultValue = "null";

    this.state = {
      pet: {
        info: {
          name: defaultValue,
          race: defaultValue,
          color: defaultValue,
          gender: defaultValue,
          age: defaultValue,
          origin: defaultValue,
          category: this.petType,
          petImage: defaultValue,
        },

        vaccinations: {
          vacDict: this.getVaccinationsDictionary()
        },

        despa: {
          product: defaultValue,
          date: defaultValue,
          feeding: defaultValue,
        }
      },

      dropDownData: [],
      modalVisible: false,
      animating: false,

    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);
    this.saveAndRegisterButtonClick = this.saveAndRegisterButtonClick.bind(this);
    this.listButtonClick = this.listButtonClick.bind(this);
    // this.noDespaClick = this.noDespaClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onCheckboxPress = this.onCheckboxPress.bind(this);
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar onBackPress={this.backButtonClick} />
        <ScrollView style={styles.scrollview}
          horizontal={false}>

          <DropDown
            dropDownType={this.state.dropDownType}
            modalVisible={this.state.modalVisible}
            dropDownData={this.state.dropDownData}
            onPressDDList={(item, type) => this.onPressDDList(item, type)}>
          </DropDown>

          <Text style={styles.clinicHistoryText}>
            {I18n.get("ClinicHistory")}
          </Text>

          <InfoPanel
            name={this.state.pet.name}
            race={this.state.pet.race}
            color={this.state.pet.color}
            age={this.state.pet.age}
            origin={this.state.pet.origin}
            gender={this.state.pet.gender}
            onChangeText={(text, type) => this.onChangeText(text, type)}
            onPress={(type) => this.onPress(type)}>
          </InfoPanel>

          <VaccinationPanel
            vaccinationDict={vaccinationsDict}
            petType={this.petType}
            onChangeText={(text, type) => this.onChangeText(text, type)}
            onCheckboxPress={(type) => this.onCheckboxPress(type)}>
          </VaccinationPanel>

          <DespaPanel
            onChangeText={(text, type) => this.onChangeText(text, type)}>
          </DespaPanel>

          {this.state.animating && <Loader animating={this.state.animating} />}
          <ButtonsPanel></ButtonsPanel>

        </ScrollView>
      </View>
    );
  }

  onChangeText(text, type) {
    console.log(text + "-" + type);

    //INfo Panel
    if (type == "FormNameTI"){
      this.setState(
        state => (
          (state.pet.name = text),
          state
        )
      );
    } else if (type == "FormAgeTI"){
      this.setState(
        state => (
          (state.pet.age = text),
          state
        )
      );
    }
    else if (type == "FormColorTI"){
      this.setState(
        state => (
          (state.pet.color = text),
          state
        )
      );
    }
    else if (type == "FormOriginTI"){
      this.setState(
        state => (
          (state.pet.origin = text),
          state
        )
      );
    }
  



    //Despa
    if(type == "Product") {
        this.createPetInput["Despa"].product = text;
    } else if (type == "Date") {
      this.createPetInput["Despa"].despa.date = text;
    } else if (type == "Feeding") {
      this.createPetInput["Feeding"].despa.feeding = text;
    }

    //vaccination
    else{
      this.setState(
        state => (
          (state.pet.vaccinations.vacDict[vac].date = text),
          state
        )
      );
    }
  }

  onCheckboxPress(vac) {
    console.log("Vaccination:" + vac);
    //  console.log(this.state.vaccinations.vacDict);
    this.setState(
      state => (
        (state.pet.vaccinations.vacDict[vac].isChecked =
          !state.pet.vaccinations.vacDict[vac].isChecked),
        state
      )
    );

  }

  onPressDDList(item, type) {
    if (type == 'raceDDList') {
      const race = item.name;
      this.setState(
        state => (
          (state.pet.race = race),
          (state.modalVisible = false),
          state
        )
      );
    } else if (type == 'genderDDList') {
      const gender = item.name;
      this.setState(
        state => (
          (state.pet.gender = gender),
          (state.modalVisible = false),
          state
        )
      );
    }
  }

  onPress(type) {
    console.log(this.petType);

    if (type == "FormRaceDD") {
      console.log(petRaceListData);
      const raceList = petRaceListData[this.petType];
      this.showDropDown(raceList, 'FormRaceDD');
    } else if (type == "FormGenderDD") {
      console.log(genderData);
      this.showDropDown(genderData, 'FormGenderDD');
    }


  }

  showDropDown(data, type) {
    this.setState(
      state => (
        (state.modalVisible = true),
        (state.dropDownData = data),
        (state.dropDownType = type),
        state
      )
    );
  }

  getVaccinationsDictionary() {

    var vaccinationDict = vaccinationsDict[this.petType];
    console.log("VaccinationDict:");
    console.log(vaccinationDict)
    return vaccinationDict

  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }


  isValidState() {
    if (this.state.pet.info.name &&
      this.state.pet.info.race &&
      this.state.pet.info.color &&
      this.state.pet.info.gender &&
      this.state.pet.info.age &&
      this.state.pet.info.origin) {
      return true
    }
    return false
  }

  showErrorAlert() {

  }

  getCreatePetInput(user) {
    const createPetInput = {
      //partitionKey
      username: user.userName,
      //PetInfo

      name: this.state.pet.info.name,
      race: this.state.pet.info.race,
      color: this.state.pet.color,
      gender: this.state.pet.info.gender,
      age: this.state.pet.info.age,
      origin: this.state.pet.origin,
      category: this.petType,
      petImage: this.state.pet.petImage,

      // use: this.state.pet.use,
      // background: this.state.pet.background,
      // weight: this.state.pet.weight,

      // Pet Vaccinations
      vaccinations: vaccinationsArray,
      // Pet Despa
      despa: this.state.pet.despa,

    };


  }

  registerPetAPICall(createPetInput) {
    this.startActivityIndicator();
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

  registerPet() {
    if (!this.isValidState()) {
      this.showErrorAlert();
      return;
    }
    //const vaccinationArray = this.getVaccinationsArray();
    Cache.getItem("User").then(user => {
      if (user) {
        const createPetInput = this.getCreatePetInput(user);
        console.log(createPetInput);
        this.registerPetAPICall(createPetInput);
      }
    });
  }


  saveButtonClick() {
    this.registerPet();
  }

  saveAndRegisterButtonClick() {
    this.props.navigation.goBack(null)
  }


  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  checkBoxClick(type) {
    if (this.state.vaccvalue == 0) {
    }

    this.setState(state => (this.state.pet.vaccinations[type].isChecked != this.state.pet.vaccinations[type].isChecked))
  }

  setModalVisible(visible) {
    //this.setState({ this.state.dropDown.modalVisible: visible });
  }


  listButtonClick(type) {
    let dataSource;
    dataSource = petDropDownData[type];
    this.dropDownType = "raceDropDownData";
    this.setState({
      dropDownData: dataSource,
      modalVisible: true
    });
  }

}


export default PetRegistrationForm;
