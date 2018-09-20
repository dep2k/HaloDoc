
import { Auth } from 'aws-amplify';
import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";

import { Cache } from 'aws-amplify';

class ConfirmCodePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {registrationCode: ""};
        this.onContinueClick = this.onContinueClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
       
    }
    backButtonClick(){
           this.props.navigation.goBack(null);
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
      
      <View style={styles.mainContainer}>
         <ImageBackground source = {require("../../images/newBackground.png")} 
                         style = {styles.backgroundImage}
                         imageStyle = {{position: 'absolute', resizeMode: 'cover',width: "100%", height: "100%",
                                        backgroundColor: 'transparent',flexDirection: "column", justifyContent: "flex-start",
                                         alignItems: "center", backgroundColor: "transparent"}}> 
               <View style={styles.headerContainer}>
                     <TouchableOpacity style = {{backgroundColor:"transparent",width:"15%", height:"80%",marginLeft: 8, justifyContent: 'center',
                                          alignItems:'center'}}
                                    onPress={this.backButtonClick}>
                         <Image source = {require('../../images/backButton.png')}
                                        style= {{width:"40%", height:"50%", justifyContent:'center',
                                                 alignItems: 'center'}}>
                       </Image>  
                     </TouchableOpacity> 
               </View>
               <Text style = {styles.textStyle}>
                 Your Code has sent to your email 
               </Text>
               <TextInput
                    style={styles.textInput }
                    placeholder="Confirm code"
                    onChangeText={(text) => this.setState({registrationCode:text})} >
               </TextInput>
               <Button  color = "white"
                title = "Continue"
                onPress= {this.onContinueClick} >
               </Button>
           </ImageBackground>
      </View>
       
       
      
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'white',
    flexDirection: 'column'
  },
  headerContainer: {
        height: "12%",
        marginTop: 0,
        width: "100%",
       // backgroundColor:"green",
        justifyContent: "flex-end",
        alignItems:"flex-start",
      //  marginBottom: "20%"
       },
  textInput: {
           height: "6%",
           width: "90%",
           borderRadius: 20,
           backgroundColor: "white",
           marginBottom: "10%",
           marginTop:"2%",
          marginHorizontal: "5%"           
  },
  backgroundImage: {
    flex: 1,
 },
  textStyle: {
    textAlign :'center',
    color: 'white',
    fontSize: 15,
    marginHorizontal: "5%",
    width: "90%",
    marginTop: "20%",

  }
});

export default ConfirmCodePage;

