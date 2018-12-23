import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    ActivityIndicator
} from "react-native";
import { I18n } from "aws-amplify";


import { logoImage, petWithPathImage } from "../../images/resource";

import { NavBar } from "../Reusable/NavBar";
import { Footer } from "../Reusable/Footer";


class FeedbackPage extends React.Component {

    constructor(props) {

        super(props);      
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    continueBtnClick() {
         
        //  const { navigation } = this.props;
        //  const pet = navigation.getParam('petInfo');
        //  this.props.navigation.navigate("QuestionsPage",{
        //      petInfo:pet,
        //  });
    }

    cancelBtnClick() {
        this.props.navigation.navigate("MainMenuPage");
    }


    backButtonClick() {
        this.props.navigation.navigate("MainMenuPage");
    }

  

    render() {


        // const { navigation } = this.props;
        // const pet = navigation.getParam('petInfo');
        // const petName = pet.name;
        // const petCategory = pet.category;
        // const navTitle = petName + " - " + petCategory;
  

        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} title = {""}></NavBar>

                <View style = {styles.contentView}>
                   
                    <View style={styles.descriptionView}>
                         <ImageBackground
                             source={petWithPathImage}
                             style= { styles.petWithPathStyle}
                             imageStyle={styles.petWithPathImageStyle}>
                
                            <Text style={styles.descriptionText}
                                    numberOfLines={0}>{ I18n.get("ConsultationEndMessage")}
                            </Text>
                        </ImageBackground>   
                    </View>

                </View>
              

                <Footer style = {styles.footer} title = " " hideBtn = {true} onPress = {this.continueBtnClick}></Footer>
  

        </View>

        );
    }
           
}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        
    },

    contentView: {
        //height: "70%",
        flex:2.3
    },


    descriptionView: {
      
        height: "100%",
        alignItems: "center",
     
        
    },

    petWithPathImageStyle: {
        
        resizeMode: "contain",
    },
 
    petWithPathStyle: {
        height: "100%",
        width: "80%",  
    },

    descriptionText: {
        
        marginTop: 200,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 24,
        textAlign: 'center'
        
    },

  
})


export default FeedbackPage;