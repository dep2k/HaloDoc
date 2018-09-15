
import {connect} from 'react-redux'

import { Auth } from 'aws-amplify';
import React from "react";
import NavigationService from '../../NavigationService';


import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Button
} from "react-native";



class LoginPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //this.props.initializeApp()
  }

  componentWillUnmount(){
   // clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }


  _onSignInClick() {

    console.log("Login Button Clicked")
    Auth.signIn("Priya", "Priya2018")
    .then(user => console.log(user))
    .catch(err => console.log(err));
  }

  _onRegisterClick() {
    console.log("RegisterBtnClick")
   // this.props.navigation.navigate('RegistrationPage');
   NavigationService.navigate('RegistrationPage', { userName: 'Lucy' });
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
          <TouchableOpacity onPress={this._onSignInClick} style = {{ backgroundColor: 'seagreen', height: 40,
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
                   onPress=  { this._onRegisterClick }>
          </Button>

        </View>
      </View>
    );
  }
}

export default LoginPage;

// function mapStateToProps (state) {
//   return {
//     counter: state.counter
//   }
// }

// function  mapDispatchToProps (dispatch) {
//   return {
//     increaseCounter: () =>   dispatch({type:'INCREASE_COUNTER'}),
//     decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'}),
    
//   }
// }



// export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)