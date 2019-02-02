import React from "react";
import { I18n } from 'aws-amplify';
import { View, 
     Image,
     StyleSheet, 
     Text,
     ImageBackground,
     TouchableOpacity } from "react-native";
import { Footer } from "../Reusable/Footer";
import {catImage} from "../../images/resource"

class SuccesfulLogin extends React.Component {

constructor(props) {
    super(props);
    this.continueButtonClick = this.continueButtonClick.bind(this);
  }
 continueButtonClick() {
     this.props.navigation.navigate('WelcomeMessage');
 }
    render() {
        return <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
              <Image source={require("../../images/navbarImage.png")} style={styles.headerImage} />
            </View>
            <View style={styles.contentView}>
                <View style={styles.descriptionView}>
                    <ImageBackground
                        
                        style={styles.catImageStyle}
                        imageStyle={styles.petWithPathImageStyle}>
                        <Text style={styles.descriptionText}
                            numberOfLines={0}>{I18n.get("SucessMessage")}
                        </Text>
                    </ImageBackground>
                </View>
          </View>
            <Footer showBtn={true} onPress={this.continueButtonClick} />
          </View>;
    }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  contentView: {
    flex: 2.3,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    height: 70,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    width: "100%",
    height: "100%"
  },
    petWithPathImageStyle: {
        resizeMode: "contain",
    },

    catImageStyle: {
        height: "50%",
        width: "85%",
        justifyContent: "center",
        alignItems: 'center'
    },

    descriptionText: {
        color: 'grey',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 24,
        textAlign: 'center'

    },

});
export default SuccesfulLogin;