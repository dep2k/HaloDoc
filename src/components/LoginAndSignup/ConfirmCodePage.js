
import { Auth } from 'aws-amplify';
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard, 
  Alert
} from "react-native";

import { I18n } from "aws-amplify";
import { Cache } from 'aws-amplify';
import Loader from "../../ActivityIndicator";

class ConfirmCodePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          registrationCode: "",
          animating: false,
      };
        this.onContinueClick = this.onContinueClick.bind(this);
       // this.backButtonClick = this.backButtonClick.bind(this);
       
    }
  //  // backButtonClick(){
  //          this.props.navigation.goBack(null);
  //   }

    startActivityIndicator() {
    this.setState({ animating: true });
    }

    closeActivityIndicator() {
    this.setState({ animating: false });
    }

    onContinueClick() {

        console.log("Continue Button Clicked")
        this.startActivityIndicator();
        Cache.getItem("Doctor").then(doc => {
          if (doc) {
            Auth.confirmSignUp(doc.name, this.state.registrationCode, {
              // Optional. Force user confirmation irrespective of existing alias. By default set to True.
              forceAliasCreation: true

            }).then(data => {
              console.log(data);
              this.props.navigation.navigate("AdminAddDoctorPage");
              this.closeActivityIndicator();
            })
              .catch(err => {
                console.log(err);
                Alert.alert(
                  "Error",
                  I18n.get("WrongCode"),
                  [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                  { cancelable: false }
                );
                this.closeActivityIndicator();
              })
          }
        })
        Cache.getItem("User").then(user => {
            if(user) {
              Auth.confirmSignUp(user.userName, this.state.registrationCode, {
                // Optional. Force user confirmation irrespective of existing alias. By default set to True.
                forceAliasCreation: true    
                
            }).then(data => {
                 console.log(data);
                 this.props.navigation.navigate("SuccesfulLoginPage");
                 this.closeActivityIndicator();
            })
                .catch(err => { 
                   console.log(err);
                   Alert.alert(
                    "Error",
                    I18n.get("WrongCode"),
                    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                    { cancelable: false }
                  );
                  this.closeActivityIndicator();
                })
            }
        })

  
    }



  render() {
    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
      <View style={styles.mainContainer}>
         {/* <ImageBackground source = {require("../../images/newBackground.png")} 
                         style = {styles.backgroundImage}
                         imageStyle = {{position: 'absolute', resizeMode: 'cover',width: "100%", height: "100%",
                                        backgroundColor: 'transparent',flexDirection: "column", justifyContent: "flex-start",
                                         alignItems: "center", backgroundColor: "transparent"}}>  */}
                <View style={styles.headerContainer}>
                     {/* <TouchableOpacity style = {styles.backButtonStyle}
                                    onPress={this.backButtonClick}>
                         <Image source = {require('../../images/backButton.png')}
                                        style= {styles.backButtonImage}>
                       </Image>  
                     </TouchableOpacity>  */}
               </View> 
               <Text style = {styles.textStyle}>
                      {I18n.get('CodeSent')}
               </Text>
               <TextInput
                    style={styles.textInput }
                    placeholder={I18n.get('Confirm Code')}
                    onChangeText={(text) => this.setState({registrationCode:text})} >
               </TextInput>
               <Button  color = "white"
                 title={I18n.get('Continue')}
                 onPress= {this.onContinueClick} >
               </Button>
           {/* </ImageBackground> */}
          {this.state.animating && <Loader animating={this.state.animating} />}
      </View>
   </TouchableWithoutFeedback>
       
       
      
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    backgroundColor: "#AACB61"
  },
  headerContainer: {
    height: "12%",
    marginTop: 0,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-start"
  },
  textInput: {
    height: 40,
    width: 300,
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 20,
    marginTop: 10,
    paddingLeft: 20,
    alignSelf: "center"
  },
  backgroundImage: {
    flex: 1
  },
  textStyle: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    width: 300,
    marginTop: 80
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
  }
});

export default ConfirmCodePage;

