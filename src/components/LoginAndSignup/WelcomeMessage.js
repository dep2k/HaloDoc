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
        <Image
          source={require("../../images/logoImage.png")}
          style={styles.topImageLogo}
        />
        //contains center welcome Text
        <View style={styles.middleContainer}>
          <Text style={styles.headingTextStyle}>{I18n.get("Welcome")}</Text>
          <Text style={styles.messageTextStyle}>
            {I18n.get("WelcomeMessage")}
          </Text>
        </View>
        <View style={styles.lowerimageContainer}>
          <ImageBackground
            source={require("../../images/landscape.png")}
            style={styles.lowerImageBackground}
          >
            <TouchableOpacity
              onPress={this.enterButtonClick}
              style={styles.enterButtonStyle}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                {I18n.get("Enter")}
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
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
  topImageLogo: {
    height: "20%",
    width: "25%",
    // marginTop: "2%",
    marginLeft: "70%",
    backgroundColor: "transparent",
    resizeMode: "contain"
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    //backgroundColor: "pink",
    width: "100%",
    height: "50%",
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
  enterButtonStyle: {
    marginLeft: "5%",
    marginBottom: "10%",
    alignItems: "center",
    height: 40,
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  lowerimageContainer: {
    height: "20%",
    backgroundColor: "pink"
  },
  lowerImageBackground: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    height: "100%",
    width: "100%",
    backgroundColor: "transparent"
  }
});
export default SuccesfulLogin;
