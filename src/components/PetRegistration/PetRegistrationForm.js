import React from "react";
import {
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

import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { CreatePet } from "../../Queries/PetAPI";
import { CheckBox } from "react-native-elements";
import { Avatar } from "react-native-elements";
import Modal from "react-native-modal";
import Loader from "../../ActivityIndicator";
import { felinoRaceListdata } from "../../data/FelinoData";
import { sexData } from "../../data/FelinoData";

const base = "../../images/";
//let data = this.ref.flatList.data;
const buttonImage = require(base + "loginButtonImage.png");
const dropDownImage = require(base + "dropDownIcon.png");
const navBarImage = require(base + "navbarImage.png");
const backButtonImage = require(base + "BackButtonShape.png");
//const raceButton = this.props.

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
    this.state = {
      pet: {
        category: "felino",
        petImage: "petImage",
        name: "",
        color: "",
        age: "",
        origin: "Origin",
        product: "",
        date: "",
        feeding: "feeding",
        use:"Use",
        background: "Background",
        weight:"20Kg",
        vaccinations: [{ vacName: "PVC", date: "234567"}]
      },
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
      origintext: "Select Origin"
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
 
    Cache.getItem("User").then(user => {
      if (user) {
        const createPetInput = {
          username: user.userName,
          category: this.state.pet.category,
          petImage: this.state.pet.petImage,
          name: this.state.pet.firstName,
          race: this.state.raceText,
          color: this.state.pet.color,
          gender: this.state.sexText,
          age: this.state.pet.age,
          origin: this.state.pet.origin,
          product: this.state.pet.product,
          date: this.state.pet.product,
          feeding: this.state.pet.feeding,
          use: this.state.pet.use,
          background: this.state.pet.background,
          weight: this.state.pet.weight,
          vaccinations: this.state.pet.vaccinations
        };
        this.startActivityIndicator();
        API.graphql(graphqlOperation(CreatePet, createPetInput))
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
        this.props.navigation.navigate("MainMenuPage");
            this.closeActivityIndicator();
          }
      })
  }
  saveAndRegisterButtonClick() {
    this.props.navigation.goBack(null);
  }

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

  listButtonClick(type) {
    console.log(type);
    if (type == "RaceDD") {
      this.setState({ dropDownData: felinoRaceListdata });
      this.setState({ dataType: "raceDropDownData" }, () => {
        console.log(this.state.dataType);
      });
    } else if (type == "SexDD") {
      this.setState({ dropDownData: sexData });
      this.setState({ dataType: "sexDropDowndata" }, () => {
        console.log(this.state.dataType);
      });
    }
    this.setModalVisible(true);
  }
  // rowButtonClick(dataType) {
  //   console.log(this.state.dataType);
  //   if (dataType == "raceDropDownData")
  // }

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
                      console.log(this.state.dataType);
                      if (this.state.dataType == "raceDropDownData") {
                        this.setState({ raceText: item.name });
                        this.setState({ textColor: "#000" });
                      } else if (this.state.dataType == "sexDropDowndata") {
                        this.setState({ sexText: item.name });
                        this.setState({ textColor: "#000" });
                      }
                      //  this.setState({text:item.name})
                      this.setState({ modalVisible: false });
                    }}
                  />
                );
              }}
            />
            }
          </Modal>
        </TouchableWithoutFeedback>

        <View style={styles.headerContainer}>
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
        <Text style={styles.clinicHistoryText}>
          {I18n.get("ClinicHistory")}
        </Text>
        <View style={styles.clinicHistoryContainer}>
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Firstname")}</Text>
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
              style={styles.originTextInputStyle}
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
              style={styles.originTextInputStyle}
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
            <Text style={styles.originText}>{I18n.get("Origin")}</Text>
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
          <Text style={styles.yesText}>{I18n.get("Yes")}</Text>
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
          />
        </View>
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
            />
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
        <Text style={styles.despaText}>{I18n.get("Despa")}</Text>
        <View style={styles.yesNoContainer}>
          <Text style={styles.yesText}>{I18n.get("Yes")}</Text>
          <CheckBox
            center
            containerStyle={styles.checkboxContainerStyle}
            checkedIcon="dot-circle-o"
            checkedColor="grey"
            uncheckedColor="grey"
            uncheckedIcon="circle-o"
            checked={this.state.despaYesChecked}
            onPress={() => this.checkBoxClick("despaYesChecked")}
          />

          <Text style={styles.noText}>{I18n.get("No")}</Text>
          <CheckBox
            center
            containerStyle={styles.checkboxContainerStyle}
            checkedIcon="dot-circle-o"
            checkedColor="grey"
            uncheckedColor="grey"
            uncheckedIcon="circle-o"
            checked={this.state.despaNoChecked}
            onPress={() => this.checkBoxClick("despaNoChecked")}
          />
        </View>
        <View style={styles.despaContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.productText}>{I18n.get("Product")}</Text>
            <TextInput style={styles.vaccAndDespatextInputStyle}
              onChangeText={text =>
                this.setState(state => ((state.pet.product = text), state))
              } />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.fetchaText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.productText}>{I18n.get("Feeding")}</Text>
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
    height: "6%",
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
    //backgroundColor: "black",
    height: 270,
    width: "90%",
    marginHorizontal: "5%"

    //   backgroundColor: 'yellow'
  },

  TextInputContainer: {
    flexDirection: "row",
    height: 40,
    width: "100%",
    // backgroundColor: "pink",
    alignItems: "center"
  },
  clinicTextInputStyle: {
    width: "100%",
    height: 40,
    marginLeft: "5%",
    justifyContent: "flex-end",
    alignItems: "flex-end"
    //  backgroundColor: 'black'
  },
  originText: {
    width: "25%",
    fontSize: 16,
    alignSelf: "center",
    color: "#8BE0DE"
    //backgroundColor: "black"
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
    width: "12%",
    height: "50%",
    marginLeft: 10,
    marginTop: "5%",
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
    // backgroundColor: "black",
    justifyContent: "center",
    alignItems: "flex-start"
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
  grey: {
    color: "darkgrey"
  },
  black: {
    color: "#000"
  },
  vaccAndDespatextInputStyle: {
    width: 100,
    height: 30
  },
  productText: {
    width: "35%",
    //height: 28,
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
    justifyContent: "space-between",
    alignItems: "center",
    color: "grey"
    // alignItems:
    // backgroundColor: "orange"
  },
  dropDownButtonTextStyle: {
    fontSize: 14,
    alignSelf: "center",
    color: "grey"
    // backgroundColor: "yellow"
  },
  dropDownIconStyle: {
    height: 10,
    width: 10
    // position: 'flex-end'
  },
  listText: {
    fontSize: 20,
    marginLeft: 150
  },
  nameText: {
    color: "#8BE0DE",
    fontSize: 18,
    padding: 2
    // backgroundColor: 'black'
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
