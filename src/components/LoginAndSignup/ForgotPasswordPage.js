import { Auth } from "aws-amplify";
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
  }
  backButtonClick() {
    this.props.navigation.goBack(null);
  }

  render() {
    return (
      //Background image for full screen
      <View style={styles.mainContainer}>
        <ImageBackground
          source={require("../../images/newBackground.png")}
          style={styles.backgroundImage}
          imageStyle={styles.imageBackgroundImageStyle}
        >
          // header
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={this.backButtonClick}
            >
              <Image
                source={require("../../images/backButton.png")}
                style={styles.backButtonImage}
              />
            </TouchableOpacity>
          </View>
          //Confirm Code Field
          <Text style={styles.textStyle}>{I18n.get("EnterEmail")}</Text>
          <TextInput
            style={styles.textInput}
           // placeholder={I18n.get("Confirm Code")}
            onChangeText={text => this.setState({ registrationCode: text })}
          />
          //Continue Button
           <Button
            color="white"
            title={I18n.get('Continue')}
            onPress={this.onContinueClick}
          /> 
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  headerContainer: {
    height: "12%",
    marginTop: 0,
    width: "100%",
    // backgroundColor:"green",
    justifyContent: "flex-end",
    alignItems: "flex-start"
    //  marginBottom: "20%"
  },
  textInput: {
    height: "6%",
    width: "90%",
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: "10%",
    marginTop: "2%",
    marginHorizontal: "5%"
  },
  backgroundImage: {
    flex: 1
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    marginHorizontal: "5%",
    width: "90%",
    marginTop: "20%"
  },
  backButtonStyle: {
    backgroundColor: "transparent",
    width: "15%",
    height: "80%",
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  backButtonImage: {
    width: "40%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackgroundImageStyle: {
    position: "absolute",
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});

export default ForgotPasswordPage;
