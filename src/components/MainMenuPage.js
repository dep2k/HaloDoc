import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import SVGImage from "react-native-svg-image";

class MainMenuPage extends React.Component {
    static navigationOptions =  ({ navigation}) => ({
      headerTitle: (
        <SVGImage style = {StyleSheet.absoluteFill}
              source = {require ('./images/header.svg')}>
        </SVGImage>
      )
    })
    render() {
        return <View style={styles.mainContainer}>
            <Text style={{ fontSize: 25, color: "white", marginTop: "15%", fontWeight: "bold", marginBottom: "15%" }}>
              MENU
            </Text>
            <View style={styles.buttonsMainContainer}>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("./images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    CONSULTAR
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("./images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    MI PERFIL
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("./images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 18,
                      color: "white",
                      fontWeight: "bold"
                    }}
                  >
                    DIRECTORIO VETERINARIO
                  </Text>
                </TouchableOpacity>
              </View>
                <View style={styles.singleButtonContainer}>
                    <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("./images/ImageLogo.jpg")} />
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white",
                                fontWeight: "bold"
                            }}
                        >
                            HISTORIAL DE CONSULTAS
                  </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.singleButtonContainer}>
                    <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("./images/ImageLogo.jpg")} />
                    <TouchableOpacity>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "white",
                                fontWeight: "bold"
                            }}
                        >
                            HISTORIAL DE PAGOS
                  </Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>;
    }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#BED885"
  },
  buttonsMainContainer: {
       flexDirection: 'column',
       flex: 0.6,
       width: '100%',
       justifyContent:'flex-start',
       justifyContent: "space-evenly",
       backgroundColor:'transparent'
  },
  singleButtonContainer: {
      
      flexDirection: "row",
      height: 50,
      width: '100%',
      justifyContent: 'flex-start',
      alignItems:'center',
      
      
     
  }
});
export default MainMenuPage;
