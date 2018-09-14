import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from "react-native";


class RegistrationPage extends React.Component {
    RegisterButtonClick = () =>
 {
    this.props.navigation.navigate('SuccesfulLogin');  
 }
    render() {
        return (
        <View style={styles.mainContainer}>
             <View style = {styles.registerbuttonContainer}>
                  <TouchableOpacity onPress={()=>{this.RegisterButtonClick();}}
                             style={{ marginLeft: '70%', height: 25, width: 60, backgroundColor:'white', justifyContent:'center',
                                      alignItems:'center', borderRadius: 20}}>
                       <Text style={{ color: "black", fontSize: 10 }}>
                           Register
                        </Text>
                </TouchableOpacity> 
             </View>
                
                 <Text style={{ fontSize: 25,color: 'white', marginTop: '5%' }}>
                 REGISTERATE
                </Text>
                <TextInput style= {{ height:35, width:'80%', marginTop:40, borderBottomColor:'white', 
                                  borderBottomWidth:1, color:'white', alignContent: "flex-end"}}
                           placeholder= "Nombre"
                           placeholderTextColor= 'white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Apellidos"
                    placeholderTextColor='white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Cedula"
                    placeholderTextColor='white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Telefono"
                    placeholderTextColor='white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Email"
                    placeholderTextColor='white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Crear Contrasena"
                    placeholderTextColor='white' >
                </TextInput>
                <TextInput style={{
                    height: 35, width: '80%', marginTop: 30, borderBottomColor: 'white',
                    borderBottomWidth: 1, color: 'white', alignContent: "flex-end"
                }}
                    placeholder="Confirmar Contra-"
                    placeholderTextColor='white' >
                </TextInput>
                <Text style ={{color:'white', marginTop:40, marginLeft:'5%'}}>
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
    registerbuttonContainer:{
         flexDirection: "row",
         height: "7%",
         width: "100%",
         justifyContent: "flex-end",
         alignItems: "flex-end",
         backgroundColor:'transparent',
         marginRight: "10%"
    }

})
export default RegistrationPage;
