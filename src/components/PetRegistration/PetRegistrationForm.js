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
import { CheckBox } from "react-native-elements";
import { Avatar } from "react-native-elements";
import Modal from "react-native-modal";
import { felinoRaceListdata} from "../../data/FelinoData";
import { sexData} from "../../data/FelinoData";

const base = "../../images/";
//let data = this.ref.flatList.data;

const dropDownImage = require(base + "dropDownIcon.png");
const navBarImage = require(base + "navbarImage.png");
const backButtonImage = require(base + "BackButtonShape.png");
//const raceButton = this.props.


class DataListItem extends React.Component {
  render() {
    return <TouchableOpacity onPress={this.props.onPress} style={styles.cellContainer}>
               <Text style={styles.nameText}>{this.props.item.name}</Text>
           </TouchableOpacity>
          
  }
}

class PetRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      modalVisible: false,
      dropDownData: [],
      dataType:"",
      text: "Select",
      raceText: "Select Race",
      sexText: "Select Gender"
    };

    this.backButtonClick = this.backButtonClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);
    this.saveAndRegisterButtonClick = this.saveAndRegisterButtonClick.bind(
      this
    );
    this.listButtonClick = this.listButtonClick.bind(this);
  }

  saveButtonClick() {
    this.props.navigation.navigate("MainMenuPage");
  }
  saveAndRegisterButtonClick() {
    this.props.navigation.goBack(null);
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  checkBoxClick() {
    this.setState({ checked: !this.state.checked });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  listButtonClick(type) {
    console.log(type);
    if (type == "RaceDD") {
      this.setState({ dropDownData: felinoRaceListdata});
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
             // ref={(ref) => this.flatList = ref}
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
                        this.setState({
                          raceText: item.name
                        });
                      } else if (this.state.dataType == "sexDropDowndata") {
                               this.setState({
                                 sexText: item.name
                               });
                             }
                    //  this.setState({text:item.name})
                      this.setState({
                        modalVisible: false
                      })
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
              placeholderColor="grey"
            />
          </View>
          <View style={styles.lastLineStyle} />

          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Race")}</Text>
            <TouchableOpacity
              id="1"
              style={styles.originTextInputStyle}
              onPress={() => this.listButtonClick("RaceDD")}
            >
              <Text 
                     style={styles.dropDownButtonTextStyle}>
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
              placeholderColor="grey"
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Sex")}</Text>
            <TouchableOpacity
              id="2"
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
              placeholderColor="grey"
            />
          </View>
          <View style={styles.lastLineStyle} />
          <View style={styles.TextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Origin")}</Text>
            <TouchableOpacity
              style={styles.originTextInputStyle}
              onPress={() => console.log("OriginButtonClicked")}
            >
              <Text style={styles.dropDownButtonTextStyle}>
                {I18n.get("Origin")}
              </Text>
              <Image style={styles.dropDownIconStyle} source={dropDownImage} />
            </TouchableOpacity>
          </View>
          <View style={styles.lastLineWithMarginBottom} />
        </View>

        <Text style={styles.vaccinationText}>{I18n.get("Vaccination")}</Text>
        <View style={styles.yesNoContainer}>
          <Text style={styles.yesNoText}>{I18n.get("Yes")}</Text>
          <CheckBox
            center
            containerStyle={styles.checkboxContainerStyle}
            checkedIcon="check-square-o"
            checkedColor="green"
            uncheckedColor="green"
            uncheckedIcon="square-o"
            checked={
              this.state.checked // title= {I18n.get('Accept terms and conditions')}
            }
            onPress={this.checkBoxClick}
          />
          <Text style={styles.yesNoText}>{I18n.get("No")}</Text>
          <Image
            style={{
              height: 12,
              width: 12,
              backgroundColor: "grey",
              marginRight: 20
            }}
          />
        </View>
        <View style={styles.vaccinationContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.pvcText}>{I18n.get("PVC")}</Text>
            <Image
              style={{
                height: 12,
                width: 12,
                backgroundColor: "grey",
                marginRight: "15%"
              }}
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
            <Image
              style={{
                height: 12,
                width: 12,
                backgroundColor: "grey",
                marginRight: "15%"
              }}
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
            <Image
              style={{
                height: 12,
                width: 12,
                backgroundColor: "grey",
                marginRight: "15%"
              }}
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
            <Image
              style={{
                height: 12,
                width: 12,
                backgroundColor: "grey",
                marginRight: "15%"
              }}
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
          <Text style={styles.yesNoText}>{I18n.get("Yes")}</Text>
          <Image
            style={{
              height: 12,
              width: 12,
              backgroundColor: "grey",
              marginRight: 20
            }}
          />
          <Text style={styles.yesNoText}>{I18n.get("No")}</Text>
          <Image
            style={{
              height: 12,
              width: 12,
              backgroundColor: "grey",
              marginRight: 20
            }}
          />
        </View>
        <View style={styles.despaContainer}>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.productText}>{I18n.get("Product")}</Text>
            <TextInput style={styles.vaccAndDespatextInputStyle} />
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
            <Text style={styles.saveButtonTextStyle}>{I18n.get("Save")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveAndRegisterButton}
            onPress={this.saveAndRegisterButtonClick}
          >
            <Text style={styles.saveAndRegisterText}>
              {I18n.get("SaveAndRegister")}
            </Text>
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
    height: 25,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  yesNoText: {
    fontSize: 15,
    color: "darkgrey",
    marginRight: 2
  },
  checkboxContainerStyle: {
    backgroundColor: "grey",
    borderColor: "transparent",
    width: "5%"
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
    marginHorizontal: "5%",
  },
  originTextInputStyle: {
    flexDirection: "row",
    width: "70%",
    height: 30,
    justifyContent: "space-between",
    alignItems: "center"
    // alignItems:
    // backgroundColor: "orange"
  },
  dropDownButtonTextStyle: {
    fontSize: 14,
    alignSelf: "center",
    color: "#C7C7CD"
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
    padding: 2,
   // backgroundColor: 'black'
  },
  flatListContentContainerStyle:{
    alignSelf: 'center', 
    width: 300, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
export default PetRegistrationForm;
