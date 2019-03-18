import React from "react";
import {
  Alert,
  View,
  ScrollView,
  Text,
} from "react-native";
import { ImagePicker } from 'expo';

import {launchPhotoLibrary,uploadImage} from '../../components/ImageHelper';
import { NavBar } from "../Reusable/NavBar";
import InfoPanel from "./InfoPanel";
import VaccinationPanel from './VaccinationPanel';
import DespaPanel from './DespaPanel';
import DropDown from './DropDown';
import ButtonsPanel from "./ButtonsPanel";

import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreatePet } from "../../Queries/PetAPI";

import Loader from "../../ActivityIndicator";
import { Avatar } from "react-native-elements";
import { petRaceListData } from "./DropDownData";
import {genderData} from "./DropDownData";
import {cameraData} from "./DropDownData";
import { vaccinationsDict, getVaccinationsArray } from "./VaccinationsData";

import { styles } from './Styles';
import Modal from "react-native-modal";
const base = "../../images/";
const petProfileImage = require(base + "petPlaceholderImage.jpg");



class PetRegistrationForm extends React.Component {

  constructor(props) {

    super(props);
    this.dropDownType = [];
    const { navigation } = this.props;
    this.petType = navigation.getParam("petType");
    defaultValue = null;
    console.log(I18n.get("ClinicHistory"));

    this.state = {
      pet: {
        base64: defaultValue,
        imageUrl: 'https://sigma-static-files.imgix.net/default_profile_pic.png',
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
          vacDict: this.getVaccinationsDictionaryForSelectedPetType()
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
    this.listButtonClick = this.listButtonClick.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onCheckboxPress = this.onCheckboxPress.bind(this);
  }

  onAvatarClick(){
    this.onPress('CameraOptionDD');
   
  }

  
  render() {
    return (
      <View style={styles.mainContainer}>
        <NavBar onBackPress={this.backButtonClick} />
        <ScrollView style={styles.scrollview}
          contentContainerStyle={{
            justifyContent: "center" }}
          horizontal={false}>
          <View style={styles.profileImage}>
            <Avatar
              large
              rounded  
               source = {{ uri: `data:image/jpg;base64,${this.state.pet.base64}` }}
              onPress={() => this.onAvatarClick()}
              activeOpacity={0.7}
            />
        </View>
            
          <Text style={styles.clinicHistoryText}>
            {I18n.get("ClinicHistory")}
          </Text>
          <DropDown
          
            dropDownType={this.state.dropDownType}
            modalVisible={this.state.modalVisible}
            dropDownData={this.state.dropDownData}
            onModalBackPress={() => {
              this.setState(
                state => (
                  (state.modalVisible = false),
                  state
                )
              )
            }}
            onPressDDList={(item, type) => this.onPressDDList(item, type)}>
          </DropDown>
          <InfoPanel
            name={this.state.pet.info.name}
            race={this.state.pet.info.race}
            color={this.state.pet.info.color}
            age={this.state.pet.info.age}
            origin={this.state.pet.info.origin}
            gender={this.state.pet.info.gender}
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
          <ButtonsPanel onPress = {(type) => this.onPress(type)}></ButtonsPanel>
          
        </ScrollView>
      </View>
    );
  }

  onChangeText(text, type) {
   // console.log(text + "-" + type);

    //INfo Panel
    if (type == "FormNameTI"){
      this.setState(
        state => (
          (state.pet.info.name = text),
          state
        )
      );
    } else if (type == "FormAgeTI"){
      this.setState(
        state => (
          (state.pet.info.age = text),
          state
        )
      );
    }
    else if (type == "FormColorTI"){
      this.setState(
        state => (
          (state.pet.info.color = text),
          state
        )
      );
    }
    else if (type == "FormOriginTI"){
      this.setState(
        state => (
          (state.pet.info.origin = text),
          state
        )
      );
    }
  
    //Despa
    else if(type == "Product") {
      this.setState(
        state => (
          (state.pet.despa.product = text),
          state
        )
      );
    } else if (type == "Date") {
      this.setState(
        state => (
          (state.pet.despa.date = text),
          state
        )
      );
    } else if (type == "Feeding") {
      this.setState(
        state => (
          (state.pet.despa.feeding = text),
          state
        )
      );
    }

    //vaccination
    else{
      this.setState(
        state => (
          (state.pet.vaccinations.vacDict[type].date = text),
          state
        )
      );
    }
  }

  onCheckboxPress(vac) {
   // console.log("Vaccination:" + vac);
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
          (state.pet.info.race = race),
          (state.modalVisible = false),
          state
        )
      );
    } else if (type == 'genderDDList') {
      const gender = item.name;
      this.setState(
        state => (
          (state.pet.info.gender = gender),
          (state.modalVisible = false),
          state
        )
      ); 
    } else if (type == 'photoPickDD') {
      const option = item.name;
      this.setState(
        state => (
          (state.modalVisible = false),
          state
        )
      );
      if (option == "Galería de fotos") {
        setTimeout(() => {
          console.log("launchliabrary")
          launchPhotoLibrary().then((result) => {
            console.log("code for base 64")
            base64 = result.base64;
            if (base64) {
              this.setState(
                state => ((state.pet.base64 = base64), state)
              )
            }
            console.log("​AdminAddDoctorPage -> onAvatarClick -> result", result)
          }).catch((error) => {
            console.log("​AdminAddDoctorPage -> onAvatarClick -> error", error);
          });
        }, 500);   
      } else if (option == "Cámara") {
        setTimeout(() => {
          this.pickImage();  
        }, 500);
      }  
     }
  }
  
  pickImage = async () => {
   
    let result = await ImagePicker.launchCameraAsync({
        exif: true,
        allowsEditing: true,
        quality: 0.7,
        base64: true,
        aspect: [4, 3]
    });
    console.log(result);
    base64 = result.base64;
    if (base64) {
      this.setState(
        state => ((state.pet.base64 = base64), state)
      )
  };
 
    if (result.cancelled) {
      return;
    }
}

  onPress(type) {
    console.log(petRaceListData);
    if (type == "FormRaceDD") {
      //console.log(petRaceListData);
      const data = petRaceListData()
      const raceList = data[this.petType];
      this.showDropDown(raceList, 'FormRaceDD');
    } else if (type == "FormGenderDD") {
      //console.log(genderData);
      const data = genderData()
      this.showDropDown(data, 'FormGenderDD');
    } else if (type == "CameraOptionDD") {
         const data = cameraData()
      this.showDropDown(data, 'CameraOptionDD')
    } 
    else if (type == "SaveClick") {
      //console.log("SaveClick");
      this.registerPet();
    } else if (type == "SaveAndRegisterClick") {
      this.goToPreviousPage = true;
      this.registerPet();
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

  getVaccinationsDictionaryForSelectedPetType() {

    var vaccinationDict = vaccinationsDict[this.petType];
   // console.log("VaccinationDict:");
   // console.log(vaccinationDict)
    return vaccinationDict

  }

  startActivityIndicator() {
    this.setState({ animating: true });
  }

  closeActivityIndicator() {
    this.setState({ animating: false });
  }


  isValidState() {
    console.log(this.state);
    if (this.state.pet.info.name &&
      this.state.pet.info.race &&
      this.state.pet.info.color &&
      this.state.pet.info.gender &&
      this.state.pet.info.age &&
      this.state.pet.info.origin) {
      console.log("Valid State");
      return true
    }
    console.log("Invalid State");
    return false
  }

  showErrorAlert() {
    Alert.alert(
      "Error",
      I18n.get("DataMissing"),
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  getCreatePetInput(user) {

    let s3Object ;
    if(this.base64){
      s3Object = {
        bucket: "Pets",
        key: "anything" // will be set by server
      }
    } else{
      s3Object = null;
    }
    const createPetInput = {
      //partitionKey
      username: user.userName,
      //PetInfo

      name: this.state.pet.info.name,
      race: this.state.pet.info.race,
      color: this.state.pet.info.color,
      gender: this.state.pet.info.gender,
      age: this.state.pet.info.age,
      origin: this.state.pet.info.origin,
      category: this.petType,
      petImage: this.state.pet.info.petImage,

      // use: this.state.pet.use,
      // background: this.state.pet.background,
      // weight: this.state.pet.weight,

      // Pet Vaccinations
      vaccinations: getVaccinationsArray(this.state.pet.vaccinations.vacDict),
      // Pet Despa
      product: this.state.pet.despa.product,
      date: this.state.pet.despa.date,
      feeding: this.state.pet.despa.feeding,
      s3Object:s3Object
    };

    return createPetInput;
  }

  registerPetAPICall(createPetInput) {
    //console.log("registerPetAPICall");
    this.startActivityIndicator();
  
    API.graphql(graphqlOperation(CreatePet, createPetInput))
      .then(response => {
        console.log("API-Response:");
        console.log(response);
        if(base64){
          const s3Object = response.data.createPet.s3Object;
          const bucket = s3Object.bucket;
          const key =  s3Object.key + ".jpg";
          uploadImage(base64,bucket,key).then((result)=>{
            console.log("​AdminAddDoctorPage -> registerPetAPICall -> Image Upload Result", result);
            }).catch((error)=>{
              console.log("​AdminAddDoctorPage -> registerPetAPICall -> Image Upload Error", error)
            });
        }
        Alert.alert(
          I18n.get("Success"),
          I18n.get("RegistrationSuccessful"),
          [
            {
              text: "OK",
              onPress: () => {
                if (this.goToPreviousPage == true) {
                  this.props.navigation.goBack(null);
                } else {
                  this.props.navigation.navigate("MainMenuPage");
                }
              }  
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
    console.log("registerPetCalled");
    if (!this.isValidState()) {
      this.showErrorAlert();
      return;
    }
    //const vaccinationArray = this.getVaccinationsArray();
    
    Cache.getItem("User").then(user => {
      console.log(user);
      if (user) {
        const createPetInput = this.getCreatePetInput(user);
        console.log(createPetInput);
        this.registerPetAPICall(createPetInput);
      } 
    });
  }


  backButtonClick() {
    this.props.navigation.goBack(null);
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
