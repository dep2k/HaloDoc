import React from "react";
import {
    View, Image, StyleSheet, Text, TouchableOpacity
} from "react-native";

class PetCategories extends React.Component {
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
                        marginTop: 20,
                        marginLeft: 240,
                        backgroundColor: "transparent"
                    }}
                />
                <View style = {styles.middleContainer}>
                   <Text style = {{ fontSize : 25, width:180, fontWeight: 'bold',
                        color: "#BED885", textAlign: 'center', marginTop: '20%' }}>
                     INSCRIPCION DE MASCOTAS
                   </Text>
                   <TouchableOpacity style = {{backgroundColor: "#BED885" , borderRadius: 20,marginTop: '20%', width: '80%', height :40,
                   justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{ fontSize: 17, color: 'white'}}>
                            FELINO
                        </Text>
                   </TouchableOpacity>
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