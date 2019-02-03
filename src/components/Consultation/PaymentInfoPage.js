import React from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    Picker
} from "react-native";

import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";


import Amplify, { API, graphqlOperation } from "aws-amplify";

import { NavBar } from "../Reusable/NavBar";
import { Footer } from "../Reusable/Footer";
import { LogoImage } from  "../Reusable/LogoImage";




class PaymentInfoPage extends React.Component {

    constructor(props) {

        super(props);
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
        this.state = {};
        this.setInitialState();
       
    }

    continueBtnClick() {

        console.log("Hello Continue Click");
        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        this.props.navigation.navigate("PreQuestionPage",{
            petInfo:pet,
        });
    
    }


    backButtonClick() {
        this.props.navigation.goBack(null);
    }

    setInitialState() {

        Cache.getItem('User').then(user => {
        if(user) {
       
            const firstName = user.firstName;
            this.setState(state => ((state.userFirstName = firstName), state));
        
        } });
    }

     replaceAll (str, searchStr, replaceStr) {
        
        // no match exists in string?
        if(str.indexOf(searchStr) === -1) {
            // return string
            return str;
        }
        str = str.replace(searchStr, replaceStr)
        // replace and remove first match, and do another recursirve search/replace
        return this.replaceAll(str, searchStr, replaceStr);
    }
    
    render() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        const petName = pet.name;
        const petCategory = I18n.get(pet.category);
        const navTitle = petName + " - " + petCategory;
        console.log(petName + " - " + petCategory);

        let payInfoText = I18n.get("PaymentInfo");
        payInfoText = this.replaceAll(payInfoText, "(petName)",petName)
        //payInfoText = payInfoText.replace(new RegExp('$(petName)', 'g'),petName)
        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} title = {navTitle.toUpperCase()}></NavBar>
                <LogoImage></LogoImage>
              
                <View style={styles.descriptionView}>

                    <Text style={styles.titleText}
                        numberOfLines={0}>Hola {this.state.userFirstName},
                    </Text>

                    <ScrollView style = {styles.scrollView}  >
                        <Text style={styles.descriptionText}
                            numberOfLines={0}>{payInfoText}
                        </Text>
                    </ScrollView>


                </View>

                <Footer showBtn = {true} onPress = {this.continueBtnClick}></Footer>
  

        {this.state.isVisible && <Picker
            style={{width: 100}}
            selectedValue={this.state.language}
            onValueChange={(lang) => this.setState({language: lang})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker> }

        </View>

        );
    }

}

const styles = StyleSheet.create({

    scrollView: {
        marginTop: 10,
        alignSelf: 'stretch',
        marginBottom: 20
    },

    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },

    headerContainer: {
        height: "10%",
        marginTop: 0,
        width: "100%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },

    headerImage: {
        width: "100%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },

    backButtonStyle: {
        backgroundColor: "transparent",
        width: 44,
        height: 44,
        marginLeft: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    descriptionView: {
        marginLeft:40,
        marginRight:40,
        marginTop: 20,
        flex: 2.3,
       // backgroundColor: 'green',
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: 'column'
    },
    descriptionText: {
        marginLeft: 0,
        fontSize: 17,
        width: "100%",
    },

    titleText: {
        marginLeft: 0,
        fontSize: 18,
        width: "100%",
        color: 'green'
    },
    backBtn: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },
    backBtnImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
})


export default PaymentInfoPage;
