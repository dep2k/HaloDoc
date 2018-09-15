import React from "react";
import {
     View, Image, StyleSheet, Text, TouchableOpacity
} from "react-native";

import { Button } from 'react-native-elements'

class PetCategories extends React.Component {


    _onClickButton ()  {

    } 

    render() {
        return (
            <View
                style = {styles.mainContainer}
            >
                <Image
                    source={require("../images/ImageLogo.jpg")}
                    style={{
                        height: 80,
                        width: 100,
                        marginTop: '35%',
                        marginLeft: '62%',
                        backgroundColor: "transparent"
                    }}
                />
                <View style = {styles.middleContainer}>
                
                   <Text style = {{ fontSize : 25, width:180, fontWeight: 'bold',
                        color: "#BED885", textAlign: 'center', marginTop: '18%' }}>
                     INSCRIPCION DE MASCOTAS
                   </Text>
                                    
                   <Button buttonStyle={{width:"100%"}}
                         title = 'BUTTON' backgroundColor = "#ff0000" borderRadius = {20}  />

                    
                   <TouchableOpacity style = {{backgroundColor: "#BED885" , borderRadius: 20,marginTop: '7%', width: '80%', height :40,
                   justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 17, color: 'white'}}>
                            CANINO
                        </Text>
                   </TouchableOpacity>
                   <TouchableOpacity style = {{backgroundColor: "#BED885" , borderRadius: 20,marginTop: '7%', width: '80%', height :40,
                   justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 17, color: 'white'}}>
                            EQUINO
                        </Text>
                   </TouchableOpacity>
                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    mainContainer : {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    middleContainer : {
        flex: 0.75,
        flexDirection: "column",
        backgroundColor: "transparent",
        justifyContent: 'flex-start',
        alignItems: 'center',
       
    }
   
})
export default PetCategories;