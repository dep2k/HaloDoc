
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import { I18n } from "aws-amplify";

const base = "../../images/";
const backButtonImage = require(base + "BackButtonShape.png");


class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    this.onContinueClick = this.onContinueClick.bind(this);

  }
  backButtonClick() {
    this.props.navigation.goBack(null);
  }
  onContinueClick() {
    console.log("continue button clicked")
  }

  render() {
    return (
      //Background image for full screen

      <View style={styles.mainContainer}>
        // header
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.backButtonStyle}
            onPress={this.backButtonClick}
          >
            <Image
              source={backButtonImage}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#AACB62",
    flexDirection: "column"
  },
  headerContainer: {
    height: 70,
    marginTop: 0,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "flex-start"
  },
  backgroundImage: {
    flex: 1
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 25
  },
  backButtonImage: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  },
});

export default TermsAndConditions;