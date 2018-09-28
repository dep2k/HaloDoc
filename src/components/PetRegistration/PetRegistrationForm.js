import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { I18n } from "aws-amplify";
import { CheckBox } from "react-native-elements";

class PetRegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.backButtonClick = this.backButtonClick.bind(this);
    this.checkBoxClick = this.checkBoxClick.bind(this);
    this.saveButtonClick = this.saveButtonClick.bind(this);
  }
  
  saveButtonClick() {
    this.props.navigation.navigate("MainMenuPage");
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  checkBoxClick() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../images/navbarImage.png")}
            style={styles.headerImage}
          >
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={require("../../images/backButton.png")}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Image
          style={styles.profilePic}
          source={require("../../images/logoImage.png")}
        />
        <Text style={styles.clinicHistoryText}>
          {I18n.get("ClinicHistory")}
        </Text>
        <View style={styles.clinicHistoryContainer}>
          <View style={styles.clinicTextInputContainer}>
            <TextInput
              style={styles.clinicTextInputStyle}
              placeholder={I18n.get("Firstname")}
              placeholderColor="grey"
            />
          </View>
          <View style={styles.clinicTextInputContainer}>
            <TextInput
              style={styles.clinicTextInputStyle}
              placeholder={I18n.get("Race")}
              placeholderColor="grey"
            />
          </View>
          <View style={styles.clinicTextInputContainer}>
            <TextInput
              style={styles.clinicTextInputStyle}
              placeholder={I18n.get("Color")}
              placeholderColor="grey"
            />
          </View>
          <View style={styles.clinicTextInputContainer}>
            <TextInput
              style={styles.clinicTextInputStyle}
              placeholder={I18n.get("Sex")}
              placeholderColor="grey"
            />
          </View>
          <View style={styles.clinicTextInputContainer}>
            <TextInput
              style={styles.clinicTextInputStyle}
              placeholder={I18n.get("Age")}
              placeholderColor="grey"
            />
          </View>
          <View style={styles.clinicLastTextInputContainer}>
            <Text style={styles.originText}>{I18n.get("Origin")}</Text>
          </View>
          <View style={styles.lastLineStyle} />
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
          <View style={styles.vaccinationFirstRowStyle}>
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
              style={{ width: 100, height: 28 }}
              placeholder="DD/MM/AAAA"
            />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.vaccinationMidRowsStyle}>
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
              style={{ width: 100, height: 28 }}
              placeholder="DD/MM/AAAA"
            />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.vaccinationMidRowsStyle}>
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
              style={{ width: 100, height: 28 }}
              placeholder="DD/MM/AAAA"
            />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.vaccinationMidRowsStyle}>
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
              style={{ width: 100, height: 28 }}
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
          <View style={styles.despaRowStyle}>
            <Text style={styles.productText}>{I18n.get("Product")}</Text>
            <TextInput style={styles.despaTextInputStyle} />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.despaRowStyle}>
            <Text style={styles.fetchaText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.despaTextInputStyle}
              placeholder="DD/MM/AAAA"
            />
          </View>
          <View style={styles.vaccinationLastLine} />
          <View style={styles.despaRowStyle}>
            <Text style={styles.productText}>{I18n.get("Feeding")}</Text>
          </View>
          <View style={styles.vaccinationLastLine} />
        </View>
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity style={styles.saveButtonStyle}
                            onPress={this.saveButtonClick}>
            <Text style={styles.saveButtonTextStyle}>{I18n.get("Save")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveAndRegisterButton}>
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
  profilePic: {
    height: 60,
    width: 60,
    marginBottom: "10%",
    marginHorizontal: "36%",
    justifyContent: "center",
    alignItems: "center",
    // borderRadius:100,
    borderColor: "black",
    borderWidth: 0.5
  },
  clinicHistoryText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#BED885",
    width: "80%",
    marginBottom: "5%",
    marginHorizontal: "10%",
    textAlign: "center"
  },
  clinicHistoryContainer: {
    //backgroundColor: "black",
    height: 220,
    width: "90%",
    marginHorizontal: "5%"
  },
  clinicTextInputContainer: {
    flexDirection: "row",
    height: 30,
    width: "100%",
    marginBottom: 5
  },
  clinicLastTextInputContainer: {
    flexDirection: "row",
    height: 30,
    width: "100%"
  },
  clinicTextInputStyle: {
    width: "100%",
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: "darkgrey",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  originText: {
    width: "100%",
    height: 30,
    color: "#8BE0DE"
  },
  lastLineStyle: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey"
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
    height: 150,
    width: "90%",
    marginHorizontal: "5%"
  },
  vaccinationFirstRowStyle: {
    flexDirection: "row",
    height: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  vaccinationMidRowsStyle: {
    flexDirection: "row",
    height: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  vaccinationLastLine: {
    width: "100%",
    height: 0.5,
    backgroundColor: "darkgrey",
    marginBottom: 5
  },
  pvcText: {
    width: "16%",
    height: 28,
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
  despaRowStyle: {
    flexDirection: "row",
    height: 30,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20
  },
  despaTextInputStyle: {
    width: 100,
    height: 28
  },
  productText: {
    width: "35%",
    height: 28,
    color: "#8BE0DE",
    textAlign: "left",
    marginRight: 15
  },
  fetchaText: {
    width: "16%",
    height: 28,
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
  }
});
export default PetRegistrationForm;
