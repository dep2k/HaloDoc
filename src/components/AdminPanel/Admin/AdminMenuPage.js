import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import SVGImage from "react-native-svg-image";
import { I18n } from "aws-amplify";


const base = "../../../images/"
const backgroundImage = require(base + "newBackground.png")
const backButtonImage = require(base + "BackButtonShape.png");
const myProfileIcon = require(base + "myProfileIcon.png");
const docIconImage = require(base + "DoctorIcon.png");
const consultIcon = require(base + "consultIcon.png");
import { Cache } from "aws-amplify";

class AdminMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.logOutButtonClick = this.logOutButtonClick.bind(this);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.doctorButtonClick = this.doctorButtonClick.bind(this);
    this.consultationsButtonClick = this.consultationsButtonClick.bind(this);
  }
  backButtonClick() { 
    this.props.navigation.goBack(null);
  }
  doctorButtonClick(nameOfPage) {
      this.props.navigation.navigate("HelperDoctorsListPage", 
     { nameOfPage : nameOfPage});
  }
  consultationsButtonClick(type) {
    this.props.navigation.navigate("PaymentHistoryPage", {
      consultationType: type
    });
  }

  logOutButtonClick() {
    this.props.navigation.navigate("LoginPage");
    Cache.clear();
  }

 
  render() {
    return <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          {/* <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={backButtonImage}
                style={styles.backButtonImageStyle}
              />
            </TouchableOpacity> */}
        </View>
        <Text style={styles.menuText}>MENU</Text>
        <View style={styles.buttonsMainContainer}>
          <View style={styles.singleButtonContainer}>
            <Image style={styles.iconImagesStyle} source={docIconImage} />
            <TouchableOpacity onPress={() => this.doctorButtonClick("AdminPage")}>
              <Text style={styles.touchableOpacityText}>
                {I18n.get("Doctor")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleButtonContainer}>
            <Image style={styles.iconImagesStyle} source={consultIcon} />
            <TouchableOpacity onPress={() => this.consultationsButtonClick("listOfAllConsultations")}>
              <Text style={styles.touchableOpacityText}>
                {I18n.get("Consultations")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleButtonContainer}>
            <Image style={styles.iconImagesStyle} source={myProfileIcon} />
            <TouchableOpacity onPress={this.logOutButtonClick}>
              <Text style={styles.touchableOpacityText}>
                {I18n.get("LogOut")}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ImageBackground> */}
      </View>;
  }
}
const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#AACB61"
    },
    topContainer: {
        height: "7%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: "20%",
    height: "25%",
    marginLeft: "1%",
    marginTop: "7%",
    justifyContent: "center",
    alignItems: "center"
  },
    backButtonImageStyle: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain'
    },
    // fullBackgroundImage: {
    //     flex: 1,
    //     flexDirection: "column",
    //     justifyContent: "flex-start",
    //     alignItems: "center"
    // },
    // fullbackgroundImageStyle: {
    //     position: "absolute",
    //     resizeMode: "cover",
    //     width: "100%",
    //     height: "100%",
    //     backgroundColor: "transparent",
    //     flexDirection: "column",
    //     justifyContent: "flex-start",
    //     alignItems: "center",
    //     backgroundColor: "transparent"
    // },
    menuText: {
        fontSize: 25,
        color: "white",
        marginTop: "10%",
        fontWeight: "bold",
        marginBottom: "15%"
    },
    buttonsMainContainer: {
        flexDirection: "column",
        height:175,
        width: "100%",
        justifyContent: "flex-start",
        justifyContent: "space-evenly",
         //backgroundColor: "pink"
    },
    singleButtonContainer: {
        flexDirection: "row",
        height: "20%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
        // backgroundColor: "pink"
    },
    iconImagesStyle: {
        width: 30,
        height: 30,
        marginLeft: "5%",
        marginRight: "5%",
        resizeMode: 'contain'
    },
    touchableOpacityText: {
        fontSize: 16.5,
        color: "white",
        fontWeight: "bold"
    }
});
export default AdminMenuPage;
