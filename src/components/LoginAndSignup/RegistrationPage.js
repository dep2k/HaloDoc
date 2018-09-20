
import React from "react";
import { I18n } from "aws-amplify";
import { CheckBox } from 'react-native-elements'

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
            checked: true,

        }
       
        this.backButtonClick = this.backButtonClick.bind(this);
        this._registerBtnClick = this._registerBtnClick.bind(this);
        this.checkBoxClick = this.checkBoxClick.bind(this);
    }
       checkBoxClick() {
           // this.props.navigation.navigate('SuccesfulLoginPage');
            this.setState({checked: !this.state.checked});
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
        <ImageBackground source = {require("../../images/newBackground.png")} 
                         style = {styles.backgroundImage}
                         imageStyle = {{position: 'absolute', resizeMode: 'cover',width: "100%", height: "100%",
                                        backgroundColor: 'transparent',flexDirection: "column", justifyContent: "flex-start",
                                         alignItems: "center", backgroundColor: "transparent"}}>
           
             <KeyboardAvoidingView style={styles.registrationFormContainer} behavior="padding">
               <View style={styles.topContainer}>
                  <TouchableOpacity style = {{backgroundColor:"transparent",width:"10%", height:"70%",marginLeft: 10, justifyContent: 'center',
                                          alignItems:'center'}}
                                    onPress={this.backButtonClick}>
                         <Image source = {require('../../images/backButton.png')}
                                        style= {{width:"50%", height:"100%", justifyContent:'center',
                                                 alignItems: 'center'}}>
                       </Image>  
                  </TouchableOpacity> 
               </View>
             <Text
                  style={{
                  marginTop: "2%",
                  backgroundColor:"transparent",
                  fontSize: 25,
                  color: "white"
                   }} >
                {I18n.get('Sign Up')}
              </Text>
              <TextInput style={{ height: "10%", width: "80%", marginTop: "3%", borderBottomColor: "white", borderBottomWidth: 1, color: "white", alignContent: "flex-end" }}
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
              <TextInput ref={(input) => { this.fifithTextInput = input; }}
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
             <TextInput style={{height: "10%",width: "80%", marginTop: "7%", alignContent: "flex-end"} }
                         placeholder={I18n.get('')}  
                         placeholderTextColor="white"
                       // onChangeText={(text) => this.setState(state => (state.user.email = text, state))} 
                       />
            </KeyboardAvoidingView>

             <View style={styles.buttonContainer}>
                <Button color="white" title={I18n.get('RegisterMe')}
                        onPress={this._registerBtnClick}>
              </Button>
            </View> 
              {/* <Text
              style={{
                color: "white",
                marginLeft: "5%",
                marginTop: 20, 
                marginLeft: 90
              }} >
                {I18n.get('Accept terms and conditions')}
            </Text> */}
            <View style = {styles.checkboxContainer}>
                  <CheckBox
                          center
                          containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent', width:"15%"}}
                          checkedIcon = 'check-square-o'
                          checkedColor= 'green'
                          uncheckedColor='white'
                          uncheckedIcon = 'square-o'
                       // title= {I18n.get('Accept terms and conditions')}
                          checked={this.state.checked}
                          onPress={this.checkBoxClick}>
                  </CheckBox>
                  <TouchableOpacity onPress= { this._onSignInClick }
                                     style = {styles.termsButton }>
                             <Text style={{ color: "white", fontSize: 12}}>
                                  {I18n.get('Accept terms and conditions')}
                             </Text> 
                  </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>;
 }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    height: "12%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  //  backgroundColor: "green",
    marginTop: "20%",

   
  },
  registrationFormContainer: {
    flex: 0.85,
    flexDirection: "column",
   // backgroundColor:'black',
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%"
  },
  textInput: {
    height: "10%",
    width: "80%",
    marginTop: "3%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white",
    alignContent: "flex-end"
  },
  buttonContainer: {
    height: "5%",
   // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
   
    
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  backgroundImage: {
    flex: 1,
 },
  checkboxContainer: {
      flexDirection: "row",
     // backgroundColor: 'black',
      height: "10%",
      justifyContent: 'center',
      alignItems: 'center'
  },
  termsButton: {
      height: "30%",
      width: "60%",
     // backgroundColor:'black', 
      justifyContent:'center',
      alignItems:'flex-start', 
     // marginRight: "20%"
  }
});
export default RegistrationPage;
