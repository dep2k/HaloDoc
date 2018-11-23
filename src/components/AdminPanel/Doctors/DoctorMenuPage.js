import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";

import { I18n } from "aws-amplify";


const base = "../../../images/"
const consultIcon = require(base + "consultIcon.png");
const myProfileIcon = require(base + "myProfileIcon.png");

class DoctorMenuPage extends React.Component {
  constructor(props) {
    super(props);

    this.openConsultationsClick = this.openConsultationsClick.bind(this);
    this.historyButtonClick = this.historyButtonClick.bind(this);
  }

ConsultationButtonClick(type) {
    console.log("ConsultationButtonClick:" + type);
    this.props.navigation.navigate("PaymentHistoryPage", { consultationType: type });

}
    historyButtonClick() {
        this.props.navigation.navigate("PaymentHistoryPage");
  }

  openConsultationsClick() {
    this.props.navigation.navigate("OpenConsultationsPage");
  }

  
  render() {
    return (
      <View style={styles.mainContainer}>
      <View
      style= {styles.topContainer}>

      </View>
        <Text style={styles.menuText}>MENU</Text>
        <View style={styles.buttonsMainContainer}>
          <View style={styles.singleButtonContainer}>
            <Image style={styles.iconImagesStyle} source={consultIcon} />
                    <TouchableOpacity onPress={() => this.ConsultationButtonClick("OnGoingStatus")}>
              <Text style={styles.touchableOpacityText}>
                {I18n.get("OpenConsultations")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.singleButtonContainer}>
            <Image style={styles.iconImagesStyle} source={consultIcon} />
                    <TouchableOpacity onPress={() => this.ConsultationButtonClick("ClosedStatus")}>
              <Text style={styles.touchableOpacityText}>
                {I18n.get("HistoryOfConsultaions")}
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
      </View>
    );
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
    menuText: {
        fontSize: 25,
        color: "white",
        marginTop: "10%",
        fontWeight: "bold",
        marginBottom: "15%"
    },
    buttonsMainContainer: {
        flexDirection: "column",
        flex: 0.25,
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
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
});
export default DoctorMenuPage;
