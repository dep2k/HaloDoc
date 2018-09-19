
import React from "react";
import { I18n } from "aws-amplify";

import {
  Alert,
  View,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator
} from "react-native";

import { Auth } from 'aws-amplify';
import NavigationService from '../../NavigationService';
import { Cache } from 'aws-amplify';
class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            user: {
                firstName: "",
                lastName: "",
                userName: "",
                phoneNo: "",
                email: "",
                password: "",
                confirmPassword: ""
            },
            animating: true,

        }
       
        this.backButtonClick = this.backButtonClick.bind(this);
        this._registerBtnClick = this._registerBtnClick.bind(this);
    }
       backButtonClick(){
           this.props.navigation.goBack(null);
       }

       _registerBtnClick() {
    
        const user = this.state.user;
        if (user.firstName && user.lastName && user.userName
            && user.email && user.phoneNo  && user.password
             && user.confirmPassword) {

                if (user.password == user.confirmPassword) {

                    Auth.signUp({
                        username: user.userName,
                        password: user.password,
                        attributes: {
                            email: user.email,
                            phone_number: user.phoneNo,
                            given_name: user.firstName,
                            family_name: user.lastName

                        // other custom attributes 
                        },
                    })
                    .then(data => {
                        console.log(data)
                        Cache.setItem("User",this.state.user);
                        this.props.navigation.navigate('CodeConfirmationPage');
                    })
                    .catch(err => console.log(err));
                } else{
                    Alert.alert(
                        'Error',
                        'Passwords dont match',
                        [
                          {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false }
                    )
                }
        
        } else {
            Alert.alert(
                'Error',
                'All fields are mandatory',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
            )
        }
        
      
    }

    render() {
        
return <View style={styles.mainContainer}>
        <ImageBackground source = {require("../images/newBackground.png")} 
                         style = {styles.backgroundImage}
                         imageStyle = {{position: 'absolute', resizeMode: 'cover',width: "100%", height: "100%",
                                        backgroundColor: 'transparent',flexDirection: "column", justifyContent: "flex-start",
                                         alignItems: "center", backgroundColor: "transparent"}}>
            <View style={styles.topContainer}>
             <TouchableOpacity style = {{marginTop:40,backgroundColor:"transparent",width:60, height:40,marginLeft: 10, justifyContent: 'center',
                                          alignItems:'center'}}
                               onPress={this.backButtonClick}>
                               <Image source = {require('../images/backButton.png')}
                                        style= {{width:"40%", height:"90%", justifyContent:'center',
                                                 alignItems: 'center'}}>
                               </Image>  
             </TouchableOpacity>
              
            </View>
          
            <KeyboardAvoidingView style={styles.registrationFormContainer} behavior="padding">
              <Text
                  style={{
                  backgroundColor:"transparent",
                  fontSize: 25,
                  color: "white"
                   }} >
                {I18n.get('Sign Up')}
              </Text>
              <TextInput style={{ height: 35, width: "80%", marginTop: 30, borderBottomColor: "white", borderBottomWidth: 1, color: "white", alignContent: "flex-end" }}
                         placeholder= {I18n.get('Firstname')} 
                         placeholderTextColor="white" 
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.secondTextInput.focus(); }}
                         blurOnSubmit={false}
                         onChangeText={(text) => this.setState(state => (state.user.firstName = text, state))} />
              <TextInput ref={(input) => { this.secondTextInput = input; }}
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                         blurOnSubmit={false}
                         style={styles.textInput}
                         placeholder={I18n.get('Lastname')} 
                         placeholderTextColor="white" 
                         onChangeText = {(text) => this.setState(state => (state.user.lastName = text, state ))}/>
              <TextInput ref={(input) => { this.thirdTextInput = input; }}
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                         blurOnSubmit={false}
                         style={styles.textInput} 
                         placeholder={I18n.get('UserId')}  
                         placeholderTextColor="white" 
                         onChangeText={(text) => this.setState(state => (state.user.userName = text, state))} />
              <TextInput ref={(input) => { this.fourthTextInput = input; }}
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.fifithTextInput.focus(); }}
                         blurOnSubmit={false}
                         style={styles.textInput} 
                         placeholder={I18n.get('PhoneNo')} 
                         placeholderTextColor="white"
                          onChangeText={(text) => this.setState(state => (state.user.phoneNo = text, state))} />
              <TextInput ref={(input) => { this.fifth = input; }}
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.sixthTextInput.focus(); }}
                         blurOnSubmit={false}
                         style={styles.textInput} 
                         placeholder={I18n.get('Email')}  
                         placeholderTextColor="white"
                        onChangeText={(text) => this.setState(state => (state.user.email = text, state))} />
              <TextInput ref={(input) => { this.sixthTextInput = input; }}
                         secureTextEntry={true}
                         returnKeyType = {"next"}
                         onSubmitEditing={() => { this.seventhTextInput.focus(); }}
                         blurOnSubmit={false}
                         style={styles.textInput} 
                         placeholder={I18n.get('Create password')}  
                         placeholderTextColor="white"
                         onChangeText={(text) => this.setState(state => (state.user.password = text, state))} />
              <TextInput ref={(input) => { this.seventhTextInput = input; }}
                         secureTextEntry={true}
                         style={styles.textInput} 
                         placeholder={I18n.get('Confirm password')} 
                         placeholderTextColor="white" 
                         onChangeText={(text) => this.setState(state => (state.user.confirmPassword = text, state))} />
             <TextInput style={{height: 35,width: "80%", marginTop: 30, alignContent: "flex-end"} }
                         placeholder={I18n.get('')}  
                         placeholderTextColor="white"
                       // onChangeText={(text) => this.setState(state => (state.user.email = text, state))} 
                       />
            </KeyboardAvoidingView>

            <View style={styles.buttonContainer}>
                <Button color="white" title="Register Me"
                        onPress={this._registerBtnClick}>
              </Button>
            </View>
            <Text
              style={{
                color: "white",
                marginLeft: "5%",
                marginTop: 20, 
                marginLeft: 90
              }} >
                {I18n.get('Accept terms and conditions')}
            </Text>
          </ImageBackground>
        </View>;
 }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    //backgroundColor: "green",
    marginTop: "13%",

   
  },
  registrationFormContainer: {
    flex: 0.85,
    flexDirection: "column",
//    / backgroundColor:'black',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%"
  },
  textInput: {
    height: 35,
    width: "80%",
    marginTop: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end"
  },
  buttonContainer: {
    height: 30,
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  backgroundImage: {
    flex: 1,
   
  }
});
export default RegistrationPage;
