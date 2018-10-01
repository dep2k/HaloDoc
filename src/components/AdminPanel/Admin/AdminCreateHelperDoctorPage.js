import React from "react";
import { I18n } from "aws-amplify";

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

class AdminCreateHelperDoctorPage extends React.Component {
  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.addDoctorButtonClick = this.addDoctorButtonClick.bind(this);
    this.addHelperButtonClick = this.addHelperButtonClick.bind(this);
  }

  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  addDoctorButtonClick() {
      this.props.navigation.navigate("AdminAddDoctorPage");
  }
    addHelperButtonClick() {
        this.props.navigation.navigate("AdminAddHelperPage");

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
        <View style={styles.logoImageContainer}>
          <Image
            source={require("../../../images/logoImage.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.blueButtonStyle}
            onPress={this.addDoctorButtonClick}
          >
            <Image style={styles.iconStyle} />
            <Text style={styles.blueButtonTextStyle}>
              {I18n.get("AddDoctor")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenButtonStyle}
            onPress={this.addHelperButtonClick}
          >
            <Image style={styles.iconStyle} />
            <Text style={styles.greenButtonTextStyle}>
              {I18n.get("AddHelper")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.blueButtonStyle}
            onPress={this.servicesButtonClick}
          >
            <Image style={styles.iconStyle} />
            <Text style={styles.blueButtonTextStyle}>
              {I18n.get("SeeHistory")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenButtonStyle}
            onPress={this.servicesButtonClick}
          >
            <Image style={styles.iconStyle} />
            <Text style={styles.greenButtonTextStyle}>
              {I18n.get("SeePaymentReports")}
            </Text>
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
    backgroundColor: "white",

    alignItems: "center"
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
  },

  blueButtonStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "#50B1BB",
    alignItems: "center",
    borderRadius: 20,
    marginTop: "7%",
    height: "13%",
    width: "90%"
  },
  blueButtonTextStyle: {
    fontSize: 20,
    color: "#50B1BB"
  },
  greenButtonStyle: {
    borderColor: "#A3C852",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 20,
    marginTop: "7%",
    height: "13%",
    width: "90%"
  },
  greenButtonTextStyle: {
    fontSize: 20,
    color: "#A3C852"
  },
  iconStyle: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "8%",
    height: "60%",
    backgroundColor: "#A3C852"
  },
  logoImageContainer: {
    width: "100%",
    height: "15%",
    // backgroundColor: 'green',
    flexDirection: "row"
  },
  logoImage: {
    width: "25%",
    height: "60%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
    marginLeft: "65%",
    marginTop: "5%"
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "pink",
    width: "100%",
    height: "50%",
    alignItems: "center"
    // paddingTop: "10%"
  }
});

export default AdminCreateHelperDoctorPage;
