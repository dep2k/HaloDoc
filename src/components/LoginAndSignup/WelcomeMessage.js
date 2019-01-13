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
const base = "../../images/";

import { Footer } from "../Reusable/Footer";
import { LogoImage } from "../Reusable/LogoImage";

class SuccesfulLogin extends React.Component {
  constructor(props) {
    super(props);
    this.enterButtonClick = this.enterButtonClick.bind(this);
  }

  enterButtonClick() {
    this.props.navigation.navigate("PetCategoriesPage");
  }

  render() {
    return <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Image source={require("../../images/navbarImage.png")} style={styles.headerImage} />
        </View>
        <LogoImage />
        //contains center welcome Text
        <View style={styles.middleContainer}>
          <Text style={styles.headingTextStyle}>{I18n.get("Welcome")}</Text>
          <Text style={styles.messageTextStyle}>
            {I18n.get("WelcomeMessage")}
          </Text>
        </View>
        <Footer showBtn={true} onPress={this.enterButtonClick} />
      </View>;
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  headerContainer: {
    height:70,
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  // backgroundColor: 'green'
  },

  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
   // backgroundColor: "pink",
    width: "100%",
    flex:2.3,
    alignItems: "center",
    paddingTop: "30%"
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
    height: 100,
    paddingHorizontal: "5%",
  //backgroundColor: "black",
  },
  
});
export default SuccesfulLogin;
