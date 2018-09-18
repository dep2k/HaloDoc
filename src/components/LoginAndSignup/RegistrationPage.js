
import React from "react";

import {
  Alert,
  View,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
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
       
 
        this._registerBtnClick = this._registerBtnClick.bind(this);
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

          
            <KeyboardAvoidingView style={styles.registrationFormContainer} behavior="padding">
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  marginTop: "10%"
                }} >
                REGISTERATE
              </Text>
              <TextInput style={{ height: 35, width: "80%", marginTop: 40, borderBottomColor: "white", borderBottomWidth: 1, color: "white", alignContent: "flex-end" }}
                         placeholder="Nombre" 
                         placeholderTextColor="white" 
                         onChangeText={(text) => this.setState(state => (state.user.firstName = text, state))} />
              <TextInput style={styles.textInput}
                         placeholder="Apellidos" 
                         placeholderTextColor="white" 
                         onChangeText = {(text) => this.setState(state => (state.user.lastName = text, state ))}/>
              <TextInput style={styles.textInput} 
                         placeholder="Cedula" 
                         placeholderTextColor="white" 
                         onChangeText={(text) => this.setState(state => (state.user.userName = text, state))} />
              <TextInput style={styles.textInput} 
                         placeholder="Telefono" 
                         placeholderTextColor="white"
                          onChangeText={(text) => this.setState(state => (state.user.phoneNo = text, state))} />
              <TextInput style={styles.textInput} 
                         placeholder="Email" 
                         placeholderTextColor="white"
                        onChangeText={(text) => this.setState(state => (state.user.email = text, state))} />
              <TextInput style={styles.textInput} 
                         placeholder="Crear Contrasena" 
                         placeholderTextColor="white"
                         onChangeText={(text) => this.setState(state => (state.user.password = text, state))} />
              <TextInput style={styles.textInput} 
                         placeholder="Confirmar Contra-" 
                         placeholderTextColor="white" 
                         onChangeText={(text) => this.setState(state => (state.user.confirmPassword = text, state))} />
            </KeyboardAvoidingView>

            <View style={styles.buttonContainer}>
              <Button color="white" title="REGISTRARME" onPress={this._registerBtnClick}>
              </Button>
            </View>
            <Text
              style={{
                color: "white",
                marginLeft: "5%",
                marginTop: 20
              }}
            >
            Acepto terminos y condiciones
            </Text>
          </View>;
 }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#BED885",
    },
    // registerbuttonContainer:{
    //      flexDirection: "row",
    //      height: "7%",
    //      width: "100%",
    //      justifyContent: "flex-end",
    //      alignItems: "flex-end",
    //      backgroundColor:'transparent',
    //      marginRight: "10%",
    // },
    registrationFormContainer: {
        flex: 0.85,
        flexDirection: "column",
       // backgroundColor:'black',
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20%'
        
        
    },
    textInput: {
        height: 35, 
        width: '80%', 
        marginTop: 30, 
        borderBottomColor: 'white',
        borderBottomWidth: 1, 
        color: 'white', 
        alignContent: "flex-end"
    },
    buttonContainer: {
        height: 30,
        marginTop: 10,
       
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }

})
export default RegistrationPage;
