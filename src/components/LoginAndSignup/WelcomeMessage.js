import React from "react";
import { I18n } from 'aws-amplify';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
} from "react-native";

class SuccesfulLogin extends React.Component {
    constructor(props) {
        super(props);
        this.enterButtonClick = this.enterButtonClick.bind(this);
    }
   
   
    enterButtonClick() {
        this.props.navigation.navigate('MainMenuPage');
    }

render() {
    return (
     <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Image source={require("../../images/navbarImage.png")}
                        style={styles.headerImage}>
                    </Image>
                </View>
                <Image source={require("../../images/logoImage.png")} 
                       style={styles.topImageLogo}>
                </Image>
                //contains center welcome Text
                <View style={styles.middleContainer}>
                    <Text style={styles.headingTextStyle}>
                          {I18n.get('Welcome')}
                    </Text>
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
  headerContainer: {
    height: "10%",
    //  marginTop: 30,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: "100%",
    height: "100%"
  },
  topImageLogo: {
    height: "20%",
    width: "25%",
    // marginTop: "2%",
    marginLeft: "70%",
    backgroundColor: "transparent",
    resizeMode: "contain"
  },
  middleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
   // backgroundColor: "pink",
    width: "100%",
    height: "45%",
    alignItems: "center",
    paddingTop: "10%"
  },
  headingTextStyle:{
    fontSize: 24,
    color: '#A4C952',
    textAlign: 'left',
    fontWeight: 'bold'
  }
});
export default SuccesfulLogin;