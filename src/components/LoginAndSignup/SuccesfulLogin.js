import React from "react";
import { I18n } from 'aws-amplify';
import { View, 
     Image,
     StyleSheet, 
     Text,
     ImageBackground,
     TouchableOpacity } from "react-native";

class SuccesfulLogin extends React.Component {

constructor(props) {
    super(props);
    this._onSignInClick = this.continueButtonClick.bind(this);
  }
 continueButtonClick() {
     this.props.navigation.navigate('WelcomeMessage');
 }
    render() {
        return (
            <View style={styles.mainContainer}>
                   <View style = {styles.headerContainer}>
                        <Image source={require("../../images/navbarImage.png")}
                               style={styles.headerImage}>
                        </Image>
                   </View>
              <View style = {styles.upperImageContainer}>
               <Image
                    source={require("../../images/SucessfulLoginMiddle.png")}
                    style = { styles.upperImageStyle}>
               </Image>
              </View>
              <View style = {styles.lowerimageContainer}>
                <ImageBackground
                    source={require("../../images/landscape.png")}
                    style={ styles.lowerImageBackground}>
                    <TouchableOpacity onPress= { this._onSignInClick }
                                    style={{marginLeft:"5%", marginBottom:"10%",
                                             alignItems: 'center', height:40, width:'50%', justifyContent:'center',
                                             alignItems:'center'}}>
                        <Text style={{ color: "white", fontSize: 20}}>
                                  {I18n.get('Continue')}
                        </Text> 
                    </TouchableOpacity>
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
        height: 225,
        width: "80%",
        resizeMode: 'contain',
        marginTop: "35%",
        marginHorizontal: "10%",
        
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
  },
   headerContainer: {
        height: "10%",
       // marginTop: 30,
        width: "100%",
        backgroundColor:"transparent",
        justifyContent: "center",
        alignItems:"center"
       },
      headerImage: {
         width:"100%",
         height: "100%" 
      },

})
export default SuccesfulLogin;