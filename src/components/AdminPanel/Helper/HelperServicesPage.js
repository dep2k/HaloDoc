import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { I18n } from "aws-amplify";

class HelperServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.historyButtonClick = this.historyButtonClick.bind(this);
    this.doctorButtonClick = this.doctorButtonClick.bind(this);
    this.servicesButtonClick = this.servicesButtonClick.bind(this);
  }
  historyButtonClick() {
    this.props.navigation.navigate("HelperHistoryPage")
  }
  servicesButtonClick() {
    this.props.navigation.navigate("HelperShowServicesPage");
  }
  doctorButtonClick() {
    this.props.navigation.navigate("HelperDoctorsListPage");
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <ImageBackground
            source={require("../../../images/navbarImage.png")}
            style={styles.headerImage}
          >
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={require("../../../images/BackButtonShape.png")}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
        <Image
          source={require("../../../images/logoImage.png")}
          style={styles.topImage}
        />
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.servicesButtonClick}
          >
            <ImageBackground
              source={require("../../../images/loginButtonImage.png")}
              style={styles.imageBackgroundStyle}
              imageStyle={styles.imageBackgroundImageStyle}
            >
              <Image style={styles.iconStyle} />
              <Text style={styles.buttonTextStyle}>{I18n.get("Services")}</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.doctorButtonClick}
          >
            <ImageBackground
              source={require("../../../images/loginButtonImage.png")}
              style={styles.imageBackgroundStyle}
              imageStyle={styles.imageBackgroundImageStyle}
            >
              <Image style={styles.iconStyle} />
              <Text style={styles.buttonTextStyle}>
                {I18n.get("DoctorsDirectory")}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.historyButtonClick}
          >
            <ImageBackground
              source={require("../../../images/loginButtonImage.png")}
              style={styles.imageBackgroundStyle}
              imageStyle={styles.imageBackgroundImageStyle}
            >
              <Image style={styles.iconStyle} />
              <Text style={styles.buttonTextStyle}>
                {I18n.get("SeeHistory")}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
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
  felineCatStyle: {
    backgroundColor: "#BED885",
    borderRadius: 20,
    marginTop: "15%",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonTextStyle: {
    fontSize: 20,
    color: "white"
  },
  iconStyle: {
      marginLeft: "5%",
      marginRight: "5%",
      width: "10%",
      height: "60%",
      backgroundColor: "white"
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: "7%",
    height: "12%",
    width: "90%"
  },
  imageBackgroundStyle: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imageBackgroundImageStyle: {
    borderRadius: 20
  },
    backButtonStyle: {
      backgroundColor: "transparent",
      width: "12%",
      height: "20%",
      marginLeft: "5%",
      marginTop: "7%",
      justifyContent: "center",
      alignItems: "center"
    },
  backButtonImageStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
  }
});
export default HelperServicesPage;
