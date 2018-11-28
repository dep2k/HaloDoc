import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { I18n } from "aws-amplify";
import { NavBar } from "../Reusable/NavBar";


const base = "../../images/";
const navBarImage = require(base + "navbarImage.png");

class PetCategories extends React.Component {
  constructor(props) {
    super(props);

    const { navigation } = this.props;
    this.pageName = navigation.getParam("pageName");


    this.categoryButtonClick = this.categoryButtonClick.bind(this);
    this.backButtonClick = this.backButtonClick.bind(this);
   // this.renderHeader = this.renderHeader.bind(this);
  }

  categoryButtonClick(type){
    
    console.log("CateogoryButtonClick:" + type);
      this.props.navigation.navigate("PetRegistrationFormPage",{
          petType: type
      });
    
    this.props.navigation.navigate("PetRegistrationFormPage");
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  renderHeader() {
    
    
    if (this.pageName == "ProfilePage") {
      return (
      <NavBar onBackPress={this.backButtonClick} />)
    } else {
      return (
      <View style={styles.headerContainer}>
        <Image source={navBarImage} style={styles.headerImage} />
      </View>)
    }
  }

  render() {
    return <View style={styles.mainContainer}>
        {this.renderHeader()}

        <Image source={require("../../images/logoImage.png")} style={styles.topImage} />
        <View style={styles.middleContainer}>
          <Text style={styles.registrationText}>
            {I18n.get("RegistrationOfPets")}
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.categoryButtonClick("cat")}>
              <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                  {I18n.get("FelineCat")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.categoryButtonClick("dog")}>
              <View style={styles.buttonViewStyle}>
                <Text style={styles.buttonTextStyle}>
                  {I18n.get("CanineDog")}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => this.categoryButtonClick("horse")}>
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
