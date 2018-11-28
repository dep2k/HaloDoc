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
const base = "../../images/";
const backButtonImage = require(base + "BackButtonShape.png");
const backgroundImage = require(base + "newBackground.png");

class ForgotPasswordPage extends React.Component {
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
      {/* <MainContainer> */}
        {/* <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
          imageStyle={styles.imageBackgroundImageStyle}
        > */}
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
          //Confirm Code Field
          <Text style={styles.textStyle}>{I18n.get("EnterEmail")}</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => this.setState({ registrationCode: text })}
          />
          //Continue Button
           <Button
            color="white"
            title={I18n.get('Continue')}
            onPress={this.onContinueClick}
          /> 
        {/* </ImageBackground> */}
      {/* </MainContainer> */}
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
