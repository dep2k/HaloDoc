import React from "react";
<<<<<<< HEAD
import { Alert, View, Image, Button, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
=======
import {
  View,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
>>>>>>> registrationPage
import { Auth } from 'aws-amplify';
import NavigationService from '../../NavigationService';
import { Cache } from 'aws-amplify';
class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            firstName:"",
            lastName:"",
            userName:"",
            phoneNo:"",
            email:"",
            password:"",
            confirmPassword:"",

        }

        // PlaceHodlers

        /*
        this.state = {

            firstName:"Nombre",
            lastName:"Apellidos",
            userName:"Cedula",
            phoneNo:"Telefono",
            email:"deep.mobdev@gmail.com",
            password:"Crear Contrasena",
            confirmPassword:"Confirmar Contra-",

        }
        */
        this._registerBtnClick = this._registerBtnClick.bind(this);
    }

    // registerBtnClick = () => {
    //     console.log(this.state.firstName)
    // }

       _registerBtnClick() {
    
        if (this.state.firstName && this.state.lastName && this.state.userName
            && this.state.email && this.state.phoneNo  && this.state.password
             && this.state.confirmPassword) {

                if (this.state.password == this.state.confirmPassword) {

                    Auth.signUp({
                        username: this.state.userName,
                        password: this.state.password,
                        attributes: {
                            email: this.state.email,
                            phone_number: this.state.phoneNo,
                            given_name: this.state.firstName,
                            family_name: this.state.lastName

                        // other custom attributes 
                        },
                    })
                    .then(data => {
                        console.log(data)
                        Cache.setItem("User",this.state);
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
        return (
        <View style={styles.mainContainer}>
<<<<<<< HEAD

             
                
                <Text style={{ fontSize: 25,color: 'white', marginTop: '15%' }}>
                     REGISTERATE
                </Text>

                <TextInput style= {{ height:35, width:'80%', marginTop:40, borderBottomColor:'white', 
                                  borderBottomWidth:1, color:'white', alignContent: "flex-end"}}
                           placeholder= "Nombre"
                           placeholderTextColor= 'white'
                           onChangeText={(text) => this.setState({firstName:text})}
                            >
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"}}
                    placeholder="Apellidos"
                    placeholderTextColor='white' 
                    onChangeText={(text) => this.setState({lastName:text})}
                     >
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"}}
                    placeholder="Cedula"
                    placeholderTextColor='white' 
                    onChangeText={(text) => this.setState({userName:text})}
                     >
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end" }}
                    placeholder="Telefono"
                    placeholderTextColor='white' 
                    onChangeText={(text) => this.setState({phoneNo:text})} 
                    >
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end" }}
                    placeholder="Email"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({email:text})} 
                    > 
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end" }}
                    placeholder="Crear Contrasena"
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({password:text})}
                     > 
                </TextInput>

                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end" }}
                    placeholder="Confirmar Contra-"
                    placeholderTextColor='white' 
                    onChangeText={(text) => this.setState({confirmPassword:text})}
                     >
                </TextInput>

                <Text style ={{color:'white', marginTop:40, marginLeft:'5%'}}>
                    Acepto terminos y condiciones
                </Text>


                <Button  color = "darkgrey"
                        title = "REGISTRARME"
                        onPress =  { this._registerBtnClick } >
                </Button>
=======
             
                <KeyboardAvoidingView style={styles.registrationFormContainer}
                                      behavior="padding">
                    <Text style={{ fontSize: 25, color: 'white', marginTop:"10%" }}>
                        REGISTERATE
                    </Text>
                    <TextInput style={{
                        height: 35, width: '80%', marginTop: 40, borderBottomColor: 'white',
                        borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                    }}
                        placeholder="Nombre"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Apellidos"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Cedula"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Telefono"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style={styles.textInput}
                        placeholder="Crear Contrasena"
                        placeholderTextColor='white' >
                    </TextInput>
                    <TextInput style= {styles.textInput}
                        placeholder="Confirmar Contra-"
                        placeholderTextColor='white' >
                    </TextInput>
                    
             </KeyboardAvoidingView>
             <View style= {styles.buttonContainer}>
                    <Button color="white"
                        title="REGISTRARME"
                        onPress={() => this.props.navigation.navigate('CodeConfirmationPage')}> >
                    </Button>
             </View>
                    <Text style={{ color: 'white', marginLeft: '5%', marginTop: 20 }}>
                       Acepto terminos y condiciones
                    </Text> 
                  
>>>>>>> registrationPage
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
       
    }

})
export default RegistrationPage;
