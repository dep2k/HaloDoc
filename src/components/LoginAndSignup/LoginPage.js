
import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  ImageBackground
} from "react-native";
import SVGImageBackground from 'react-native-svg-image';

class LoginPage extends React.Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  LogInButtonClick = () =>
 {
    this.props.navigation.navigate('MainMenuPage');  
 }
 RegisterButtonClick = () =>
 {
      this.props.navigation.navigate('RegistrationPage');  
 }
  render() {
    return <View style={{ flex: 1, flexDirection: "column", backgroundColor: "white" }}>
        <Image source={require("../images/ImageLogo.jpg")} style={{ height: 80, width: 100, marginTop: 20, marginLeft: 240, backgroundColor: "transparent" }} />
        <View style={{ flexDirection: "column", justifyContent: "flex-start", backgroundColor: "transparent", width: "100%", height: 400, alignItems: "center", paddingTop: 80 }}>
          <Text style={{ fontSize: 15, fontWeight: "normal", color: "#7C7B7B", marginRight: 220, marginBottom: 5 }}>
            Usuario
          </Text>
          <TextInput style={{ height: 40, width: 300, borderRadius: 20, backgroundColor: "#F8F8F8", marginBottom: 30, paddingHorizontal: 10 }} placeholder="Enter your Email!" />
          <Text style={{ fontSize: 15, fontWeight: "normal", color: "#7C7B7B", marginRight: 185, marginBottom: 5 }}>
            Contrasena
          </Text>
          <TextInput style={{ height: 40, width: 300, borderRadius: 20, backgroundColor: "#F8F8F8", marginBottom: 40, paddingHorizontal: 10 }} placeholder="Password" />
          <TouchableOpacity onPress={()=>{this.LogInButtonClick();}}
                             style={{  height: 40, width: 300, backgroundColor:'mediumseagreen', justifyContent:'center',
                                      alignItems:'center', borderRadius: 20}}>
                       <Text style={{ color: "white", fontSize: 20 }}>
                           INICIO DE SESION
                        </Text>
         </TouchableOpacity>
            
            
          <Text
            style={{
              fontSize: 17,
              color: "grey",
              marginTop: 10,
              marginBottom: 60
            }}
          >
            Olvide me contracena?
          </Text>
          <Button color="darkgrey" title="REGISTRARME" onPress={this.RegisterButtonClick} />
        </View>
      </View>;
  }
}

// class TestLoginPage extends React.Component {


//   render() {
//       return (
//           <View>
//               <Button
//                 onPress={ () => this.props.navigation.navigate('Home')}
//                 title="Go To Home"
//                 color="#ffaa00" />

//               <TouchableOpacity >
//                 <Text>Increment</Text>
//               </TouchableOpacity>

//               <Text>Something</Text>

//               <TouchableOpacity >
//                 <Text>Decrement</Text>
//               </TouchableOpacity>

//           </View>
//       )
//   }
// }

export default LoginPage;

