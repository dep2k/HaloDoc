import React from "react";
import {
    View,
    Image,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    ActivityIndicator,
    Picker
} from "react-native";

import { I18n } from "aws-amplify";
import { Cache } from "aws-amplify";
import { logoImage } from "../../images/resource";

import Amplify, { API, graphqlOperation } from "aws-amplify";

import { NavBar } from "../Reusable/NavBar";
import { Footer } from "../Reusable/Footer";




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


    render() {

        const { navigation } = this.props;
        const pet = navigation.getParam('petInfo');
        const petName = pet.name;
        const petCategory = pet.category;
        const navTitle = petName + " - " + petCategory;
        console.log(petName + " - " + petCategory);

        return (
            <View style={styles.mainContainer}>

                <NavBar onBackPress={this.backButtonClick} title = {navTitle.toUpperCase()}></NavBar>

                <Image
                    source={logoImage}
                    style={styles.logoImage}
                />

                <View style={styles.descriptionView}>

                     <Text style={styles.titleText}
                        numberOfLines={0}>Hola {this.state.userFirstName},
                    </Text>

                    <ScrollView style = {styles.scrollView}  >
                        <Text style={styles.descriptionText}
                            numberOfLines={0}>{ I18n.get("PaymentInfo")}
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


    logoButton: {
        height: "20%",
        width: "25%",
        // marginTop: "2%",
        marginLeft: "70%",
        backgroundColor: "transparent"
    },

    logoImage: {
        alignSelf: 'flex-end',
        resizeMode: "contain",
        marginTop: 10,
        width: 80,
        height: 60,
        marginRight: 20,

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
        flex:1,
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
