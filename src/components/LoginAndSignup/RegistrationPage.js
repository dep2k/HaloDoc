import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Auth } from 'aws-amplify';

class RegistrationPage extends React.Component {

    constructor(props) {
        super(props);
    }

    _onSignUp() {

        /*
        Auth.signUp({
            username: "Priya",
            password: 'Priya2018',
            attributes: {
            email:"priya.mobdev@gmail.com"       
            // other custom attributes 
            },
        })
        .then(data => {
            console.log(data)
            this.props.navigation.navigate('CodeConfirmationPage');
        })
        .catch(err => console.log(err));*/
    }

    render() {
        return (
        <View style={styles.mainContainer}>
             
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
