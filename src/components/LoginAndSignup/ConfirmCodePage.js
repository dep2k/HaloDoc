
import { Auth } from 'aws-amplify';
import React from "react";
import {
  View,
  TextInput,
  Button
} from "react-native";

import { Cache } from 'aws-amplify';

class ConfirmCodePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {registrationCode: ""};
        this.onContinueClick = this.onContinueClick.bind(this);
       
    }

    onContinueClick() {

        console.log("Continue Button Clicked")
        Cache.getItem("User").then(user => {
            if(user) {
              Auth.confirmSignUp(user.userName, this.state.registrationCode, {
                // Optional. Force user confirmation irrespective of existing alias. By default set to True.
                forceAliasCreation: true    
                
            }).then(data => console.log(data))
            .catch(err => console.log(err));
            }
        })

  
    }



  render() {
    return (
      
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: "lightblue"
        }}>
       
        <TextInput
             style={{
              height: 40,
              width: 300,
              borderRadius: 15,
              backgroundColor: "white",
              marginBottom: 40,
              paddingHorizontal: 10
            }}
            placeholder="Code"
            onChangeText={(text) => this.setState({registrationCode:text})} 
        />
       
        <Button  color = "darkgrey"
                title = "Continue"
                onPress= {this.onContinueClick} >
        </Button>
        
      </View>
    );
  }
}

export default ConfirmCodePage;

