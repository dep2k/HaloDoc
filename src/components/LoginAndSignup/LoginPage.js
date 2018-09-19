
//import {connect} from 'react-redux'

import { Auth } from 'aws-amplify';
import React from "react";
import NavigationService from '../../NavigationService';
import { I18n } from 'aws-amplify';


import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Button,
  ImageBackground,
  ActivityIndicator
} from "react-native";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
    this._onSignInClick = this._onSignInClick.bind(this);
    this._onRegisterClick = this._onRegisterClick.bind(this);
  }

   

  componentDidMount() {
    //this.props.initializeApp()
  }

  componentWillUnmount() {
    // clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }

  _onSignInClick() {

    Auth.signIn(this.state.username, this.state.password).then(user => {
      console.log(user);
      this.props.navigation.navigate('MainMenuPage');
    }).catch(err => {
      console.log(err);
    });
  }

  _onRegisterClick() {
    console.log("RegisterBtnClick")
    this.props.navigation.navigate('RegistrationPage');
   // NavigationService.navigate('RegistrationPage', { userName: 'Lucy' });
  }

  render() {

    return <SafeAreaView style={{flex: 1}}>
                <View style = {styles.mainContainer}>
                   <View style = {styles.headerContainer}>
                        <Image source={require("../../images/navbarImage.png")}
                               style={styles.headerImage}>
                        </Image>
                   </View>
                        
                   <Image source={require("../../images/logoImage.png")} 
                          style= { styles.topImage } />
                   <View style = { styles.middleContainer}>
                         <Text style = {styles.loginText}>
                               {I18n.get('Username')}
                        </Text>
                       <TextInput returnKeyType = {"next"}
                                  onSubmitEditing={() => { this.secondTextInput.focus(); }}
                                  blurOnSubmit={false}
                                  style={ styles.textInput}
                                  placeholder={I18n.get('Username')}
                                  onChangeText={(text) => this.setState(state => (state.username = text, state))}>
                       </TextInput>

                       <Text  style = {styles.passwordText}>
                               {I18n.get('Password')}
                       </Text>
                       <TextInput ref={(input) => { this.secondTextInput = input; }}
                                  secureTextEntry={true}
                                  style={ styles.textInput} 
                                  placeholder="Password"
                                  onChangeText={(text) => this.setState(state => (state.password = text, state))}>
                       </TextInput>
          <TouchableOpacity onPress= { this._onSignInClick }
                             style = {styles.loginButton }>
                       <ImageBackground source = {require('../../images/loginButtonImage.png')}
                                        style= {{width:"100%", height:"100%", borderRadius:20, justifyContent:'center',
                                                 alignItems: 'center'}}
                                        imageStyle={{borderRadius:20}}>
                               <Text style={{ color: "white", fontSize: 20}}>
                                  {I18n.get('Sign In')}
                              </Text> 
                      </ImageBackground>     
         </TouchableOpacity>
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 10,
              marginBottom: 60
            }}>
                {I18n.get('Forgot Password')}
          </Text>
          <Button color="darkgrey"   
                  title={I18n.get('RegisterMe')} 
                  onPress={this._onRegisterClick} />
        </View>
      </View>
    </SafeAreaView>;
  }
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        flexDirection: "column", 
        backgroundColor: "white"
    },
    headerContainer: {
        height: 60,
        marginTop: 30,
        width: "100%",
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems:"center"
       },
      headerImage: {
         width:"100%",
         height: "100%" 
      },
    topImage:{
      height: 80, 
      width: 105, 
      marginTop: 20, 
      marginLeft: 240, 
      backgroundColor: "transparent"
    },
    loginButton: {
      height: 40,
      width: 300,
      backgroundColor:'mediumseagreen', 
      justifyContent:'center',
      alignItems:'center', 
      borderRadius: 20
    },
    middleContainer: {
      flexDirection: "column", 
      justifyContent: "flex-start", 
      backgroundColor: "transparent", 
      width: "100%", height: 400, 
      alignItems: "center", 
      paddingTop: 80
    },
    textInput: {
      height: 40, 
      width: 300, 
      borderRadius: 20, 
      backgroundColor: "#F8F8F8", 
      marginBottom: 40,
      paddingHorizontal: 10
    },
    loginText: {
      fontSize: 15, 
      fontWeight: "normal", 
      color: "#7C7B7B",  
      marginBottom: 5,
      marginRight: 190
    },
    passwordText:{
      fontSize: 15, 
      fontWeight: "normal", 
      color: "#7C7B7B",  
      marginBottom: 5,
      marginRight: 190
    }
})

export default LoginPage;

