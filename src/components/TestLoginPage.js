import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button
} from "react-native";



class TestLoginPage extends React.Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "lightblue"
        }}
      >
   
        <Image
          source={require("./images/ImageLogo.jpg")}
          style={{
            height: 80,
            width: 100,
            marginTop: 20,
            marginLeft: 240,
            backgroundColor: "transparent"
          }}
        />
        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-start",
            backgroundColor: "transparent",
            width: "100%",
            height: 400,
            alignItems: "center",
            paddingTop: 80
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              color: "grey",
              marginRight: 220,
              marginBottom: 5
            }}
          >
            Usuario
          </Text>
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderRadius: 15,
              backgroundColor: "white",
              marginBottom: 30,
              paddingHorizontal:10
            }}
            placeholder="Enter your Email!"

          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "normal",
              color: "grey",
              marginRight: 185,
              marginBottom: 5
            }}
          >
            Contrasena
          </Text>
          <TextInput
            style={{
              height: 40,
              width: 300,
              borderRadius: 15,
              backgroundColor: "white",
              marginBottom: 40,
              paddingHorizontal: 10
            }}
            placeholder="Password"
          />
          <TouchableOpacity style = {{ backgroundColor: 'seagreen', height: 40,
             width: 300, borderRadius:10, justifyContent: 'center', alignItems: 'center'}}>
               <Text style= {{color:"white", fontSize: 20}}>
                 INICIO DE SESION
               </Text>
          </TouchableOpacity>
          <Text style= {{fontSize:17, color: 'grey', marginTop: 10, marginBottom: 60}}>
            Olvide me contracena?
          </Text>
          <Button  color = "darkgrey"
                   title = "REGISTRARME"
                   onPress= {this._onPressButton} >
          </Button>

        </View>
      </View>
    );
  }
}

export default TestLoginPage;
