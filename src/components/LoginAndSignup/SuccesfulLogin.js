import React from "react";
import { View, Image, StyleSheet, Text,ImageBackground } from "react-native";

class SuccesfulLogin extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
              <View style = {styles.upperImageContainer}>
               <Image
                    source={require("../images/ImageLogo.jpg")}
                    style={ styles.upperImageStyle}
                />
              </View>
              <View style = {styles.lowerimageContainer}>
                    <ImageBackground
                    source={require("../images/landscape.png")}
                    style={ styles.lowerImageBackground}>
                    <Text style={{marginLeft:"5%", textAlign:'center', marginBottom:"10%",
                        alignItems: 'center',fontSize: 20, color: 'white', height:40, width:'50%', justifyContent:'center',
                    alignItems:'center'}}>
                        CONTINUAR
                </Text>
                </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    },
    upperImageContainer: {
        flex:2.3,
       
   },
   upperImageStyle: {
        height: 250,
        width: 300,
        marginTop: "35%",
        marginHorizontal: '10%'
   },
   lowerimageContainer: {
       flex:0.7,
       backgroundColor: "transparent"
  },
  lowerImageBackground: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: "100%",
    width: '100%',
    backgroundColor: "transparent"
  }

})
export default SuccesfulLogin;