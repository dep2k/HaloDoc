import React from "react";
import { View, Image, StyleSheet, Text ,ImageBackground} from "react-native";


class Welcomepage extends React.Component {
 

  constructor(props){
    super(props)
    this.navigation = props.navigation;
  }
   
  componentDidMount () {
    setTimeout(function(){
        this.navigation.navigate('LoginPage');
        console.log("Hello")
      }, 2000);
  }
  

  render() 
  {  
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require("../images/ImageLogo.jpg")}
          style={{
            height: 250,
            width:300,
            marginTop: "35%",
            marginHorizontal: '10%',
            backgroundColor: "transparent"
          }}
        />
            <ImageBackground
                source={require("../images/landscape.png")}
                style={{
                    justifyContent: 'center',
                    alignItems:'center',
                    marginTop: '50%',
                    height: 180,
                    width: '100%',
                    backgroundColor: "transparent"
                }}>
                <Text style = {{fontSize:20, color: 'white', }}>
                   TU VETERINARIO A UN CLICK
                </Text>
            </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white"
    }

})
export default Welcomepage;