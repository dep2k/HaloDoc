import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import SVGImage from "react-native-svg-image";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { I18n } from 'aws-amplify';

class MainMenuPage extends React.Component {

      
  constructor(props) {

    super(props);
    this.testGapi = this.testGapi.bind(this);
    this.testGapi();

  }

  testGapi() {
   
    return;
     API.graphql(graphqlOperation(AllMessages)).then(response => {
      const messages = response.data.allMessages;
      messages.map(function(message){
        console.log(message.conversationId);
      });
    }).catch(err => {
      console.log(err);
    });
  }

    static navigationOptions =  ({ navigation}) => ({
      headerTitle: (
        <SVGImage style = {StyleSheet.absoluteFill}>
             
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
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("../images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text
                    style = {styles.touchableOpacityText} >
                     {I18n.get('Consult')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("../images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text style = {styles.touchableOpacityText} >
                   {I18n.get('MyProfile')} 
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("../images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text style = {styles.touchableOpacityText} >
                   {I18n.get('VeterinaryDirectory')}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.singleButtonContainer}>
                <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("../images/ImageLogo.jpg")} />
                <TouchableOpacity>
                  <Text style = {styles.touchableOpacityText} >
                           {I18n.get('HistoryOfConsultaions')}
                   </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.singleButtonContainer}>
                  <Image style={{ width: 30, height: 30, marginLeft: "10%", marginRight: "5%" }} source={require("../images/ImageLogo.jpg")} />
                  <TouchableOpacity>
                    <Text style = {styles.touchableOpacityText}>
                            {I18n.get('PaymentHistory')}
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
  },
  touchableOpacityText: {
     fontSize: 18,
     color: "white",
     fontWeight: "bold"
  }
});
export default MainMenuPage;
