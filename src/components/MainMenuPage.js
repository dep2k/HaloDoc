import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { I18n } from "aws-amplify";
import {Cache} from "aws-amplify";
import { imageLogo } from "../images/resource";


const base = "../images/";
const consultIcon = require(base + "consultIcon.png");
const myProfileIcon = require(base + "myProfileIcon.png");
const doctorListicon = require(base + "listOfDoctorsIcon.png");
const conHistoryIcon = require(base + "historyOfConsultationsIcon.png");
const paymentHistoryIcon = require(base + "paymenthistoryIcon.png");


class MainMenuPage extends React.Component {
  constructor(props) {
    super(props);
    this.logOutButtonClick = this.logOutButtonClick.bind(this);
    this.consultBtnClick = this.consultBtnClick.bind(this);
    this.vetListButtonClick = this.vetListButtonClick.bind(this);
    this.myProfileButtonClick = this.myProfileButtonClick.bind(this);
    this.historyButtonClick = this.historyButtonClick.bind(this);
    this.openConsultaionsButtonClick = this.openConsultaionsButtonClick.bind(this);
  }

  vetListButtonClick() {
    this.props.navigation.navigate("HelperDoctorsListPage");
  }
  openConsultaionsButtonClick() {

  }

  myProfileButtonClick() {
    this.props.navigation.navigate("ProfilePage");
  }
  historyButtonClick() {
    this.props.navigation.navigate("PaymentHistoryPage");
  }
  logOutButtonClick() {
    // this.props.navigation.dispatch(
    //   this.props.NavigationActions.reset({
    //     index: 1,
    //     actions: [
    //       this.props. NavigationActions.navigate({ routeName: 'Router' }),
    //       this.props. NavigationActions.navigate({ routeName: 'LoginPage' }),
    //     ],
    //   }),
    // )
    this.props.navigation.navigate("LoginPage");
    Cache.clear();
  }

  consultBtnClick() {
    this.props.navigation.navigate("PetChooserPage");
  }

  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <SVGImage style={StyleSheet.absoluteFill} />
  // });
  render() {
    return (
      <View style={styles.mainContainer}>
        {/* <ImageBackground
          source={require("../images/newBackground.png")}
          style={styles.fullBackgroundImage}
          imageStyle={styles.fullbackgroundImageStyle}
        > */}
          <Text style={styles.menuText}>MENU</Text>
          <View style={styles.buttonsMainContainer}>
            <View style={styles.singleButtonContainer}>
              <Image style={styles.iconImagesStyle} source={consultIcon} />
              <TouchableOpacity onPress={this.consultBtnClick}>
                <Text style={styles.touchableOpacityText}>
                  {I18n.get("Consult")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singleButtonContainer}>
              <Image style={styles.iconImagesStyle} source={consultIcon} />
              <TouchableOpacity
                onPress={() => this.openConsultaionsButtonClick()}
              >
                <Text style={styles.touchableOpacityText}>
                  {I18n.get("OpenConsultations")}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.singleButtonContainer}>
              <Image style={styles.iconImagesStyle} source={conHistoryIcon} />
              <TouchableOpacity onPress={this.historyButtonClick}>
                <Text style={styles.touchableOpacityText}>
                  {I18n.get("HistoryOfConsultaions")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singleButtonContainer}>
              <Image style={styles.iconImagesStyle} source={myProfileIcon} />
              <TouchableOpacity onPress={() => this.myProfileButtonClick()}>
                <Text style={styles.touchableOpacityText}>
                  {I18n.get("MyProfile")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.singleButtonContainer}>
              <Image style={styles.iconImagesStyle} source={doctorListicon} />
              <TouchableOpacity>
                <Text
                  style={styles.touchableOpacityText}
                  onPress={this.vetListButtonClick}
                >
                  {I18n.get("VeterinaryDirectory")}
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
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#AACB61",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // fullBackgroundImage: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  //   alignItems: "center"
  // },
  // fullbackgroundImageStyle: {
  //   position: "absolute",
  //   resizeMode: "cover",
  //   width: "100%",
  //   height: "100%",
  //   backgroundColor: "transparent",
  //   flexDirection: "column",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   backgroundColor: "transparent"
  // },
  menuText: {
    fontSize: 25,
    color: "white",
    marginTop: "15%",
    fontWeight: "bold",
    marginBottom: "15%"
  },
  buttonsMainContainer: {
    flexDirection: "column",
   // flex: 0.7,
    height: 350,
    width: "100%",
    justifyContent: "flex-start",
    justifyContent: "space-evenly",
    // backgroundColor: "pink"
  },
  singleButtonContainer: {
    flexDirection: "row",
    height: 46,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
     //backgroundColor: "pink"
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
export default MainMenuPage;
