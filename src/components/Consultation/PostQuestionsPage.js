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

import { navBarImage } from "../../images/resource";
import { backBtnImage } from "../../images/resource";
import { btnBackgroundImage } from "../../images/resource";
import { logoImage } from "../../images/resource";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import  {Cache} from "aws-amplify";
import { GetPets } from "../../Queries/PetAPI";
import { Avatar } from "react-native-elements";
import { NavBar } from "../Reusable/NavBar";
import { Footer } from "../Reusable/Footer";



class PostQuestionsPage extends React.Component {

    constructor(props) {

        super(props);   
        this.state = {
            fullName:""
        } 
        this.setInitialState();
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    continueBtnClick() {
         //this.props.navigation.navigate("AvailableDoctorsPage");
         const { navigation } = this.props;
         const pet = navigation.getParam('petInfo');
         const questionsList = navigation.getParam('questions');
         const id = navigation.getParam('chatId');
         this.props.navigation.navigate("AvailableDoctorsPage",{
             petInfo:pet,
             questions: questionsList,
             chatId: id
         });
    }


    backButtonClick() {
        this.props.navigation.goBack(null);
    }

  
    setInitialState() {
        Cache.getItem('User').then(user => {
        if(user) {
            console.log(user);
            const firstName = user.firstName;
            const lastName = user.lastName;
            this.setState(state => ((state.fullName = firstName + " " + lastName), state));
        
        } });
    }

    render() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        const petName = pet.name;
        const petCategory = I18n.get(pet.category);
        const navTitle = petName + " - " + petCategory;

        
        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} title = {navTitle.toUpperCase()}></NavBar>
                
                <View style = {styles.contentView}>

                        <Text style={styles.fullNameText}>{this.state.fullName}
                        </Text>
                        <Text style={styles.descriptionText}>{I18n.get("PostQuestionText")}
                        </Text>
                  
                 </View>

                <Footer  style = {styles.footer} showBtn = {true} onPress = {this.continueBtnClick}></Footer>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },

    contentView: {
       flex:2.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    fullNameText: {
        marginLeft: 15,
        fontSize: 24,
        width: "70%",
        color: "green"
    },
  

    descriptionText: {
        marginLeft: 15,
        fontSize: 24,
        width: "70%",

    },


})


export default PostQuestionsPage;
