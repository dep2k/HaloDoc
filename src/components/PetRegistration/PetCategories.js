import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { I18n } from "aws-amplify";

class PetCategories extends React.Component {
  constructor(props) {
    super(props);
    this.categoryButtonClick = this.categoryButtonClick.bind(this);
  }

  categoryButtonClick(){
    this.props.navigation.navigate("PetRegistrationFormPage");
  }

  render() {
    return <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image source={require("../../images/navbarImage.png")} style={styles.headerImage} />
        </View>
        <Image source={require("../../images/logoImage.png")} style={styles.topImage} />
        <View style={styles.middleContainer}>
          <Text style={styles.registrationText}>
            {I18n.get("RegistrationOfPets")}
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.categoryButtonClick}>
              <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                  {I18n.get("FelineCat")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.categoryButtonClick}>
              <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                  {I18n.get("CanineDog")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={this.categoryButtonClick}>
              <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                  {I18n.get("EquineHorse")}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  topImage: {
    height: "15%",
    width: "25%",
    //marginTop: "2%",
    marginLeft: "70%",
    //backgroundColor: "black",
    resizeMode: "contain"
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
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    //backgroundColor: "pink",
    width: "100%",
    height: "70%",
    alignItems: "center",
    paddingTop: "10%"
  },
  registrationText: {
    fontSize: 25,
    width: 180,
    fontWeight: "bold",
    color: "#BED885",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: "15%"
  },
 
  buttonTextStyle: {
    fontSize: 17,
    color: "white",
    alignSelf: "center"
  },
  buttonViewStyle: {
    alignItems: "center",
    //backgroundColor: 'pink',
    height: 30,
    width: 100,
    justifyContent: "center"
  },
  buttonStyle: {
    backgroundColor: "#BED885",
    borderRadius: 20,
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainer : {
    height: 180,
    width: "80%",
  //  backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
export default PetCategories;
