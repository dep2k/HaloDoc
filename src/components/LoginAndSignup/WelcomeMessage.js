import React from "react";
import { I18n } from "aws-amplify";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { Footer } from "../Reusable/Footer";

class SuccesfulLogin extends React.Component {
  constructor(props) {
    super(props);
    this.enterButtonClick = this.enterButtonClick.bind(this);
  }

  enterButtonClick() {
    this.props.navigation.navigate("PetCategoriesPage");
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image
            source={require("../../images/navbarImage.png")}
            style={styles.headerImage}
          />
        </View>
        <View style={styles.logoContainer} >
          <Image
            source={require("../../images/logoImage.png")}
            style={styles.topImageLogo}
          />
        </View>
      
        //contains center welcome Text
        <View style={styles.middleContainer}>
          <Text style={styles.headingTextStyle}>{I18n.get("Welcome")}</Text>
          <Text style={styles.messageTextStyle}>
            {I18n.get("WelcomeMessage")}
          </Text>
        </View>
         <Footer showBtn = {true} onPress = {this.enterButtonClick}></Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  headerContainer: {
    height: "10%",
    //  marginTop: 30,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: "100%",
    height: "100%"
  },
  logoContainer: {
    width: "100%",
    height: 80,
    marginTop: 10,
    marginBottom: "10%",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  topImageLogo: {
    marginRight:35,
    backgroundColor: "transparent",
    resizeMode: "contain",
     height: 60,
    width: 80,
    marginRight: 35,
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
   // backgroundColor: "pink",
    width: "100%",
    flex:2.3,
    alignItems: "center",
    paddingTop: "10%"
  },
  headingTextStyle: {
    fontSize: 24,
    color: "#A4C952",
    textAlign: "left",
    fontWeight: "bold",
    paddingHorizontal: "5%",
    width: "90%"
  },
  messageTextStyle: {
    fontSize: 18,
    color: "#838282",
    textAlign: "left",
    fontWeight: "normal",
    width: "90%",
    paddingHorizontal: "5%"
  },
  
});
export default SuccesfulLogin;
