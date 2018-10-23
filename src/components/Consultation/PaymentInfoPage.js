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
    ActivityIndicator,
    Picker
} from "react-native";
import { I18n } from "aws-amplify";

import { navBarImage } from "../../images/resource";
import { backBtnImage } from "../../images/resource";
import { btnBackgroundImage } from "../../images/resource";
import { logoImage } from "../../images/resource";
import Amplify, { API, graphqlOperation } from "aws-amplify";

import { GetPets } from "../../Queries/PetAPI";
import { Avatar } from "react-native-elements";
import { NaviBar } from "../Reusable/reusable";



class PaymentInfoPage extends React.Component {

    constructor(props) {

        super(props);
        this.continueBtnClick = this.continueBtnClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
        this.state = {
            isVisible: false
        }
    }

    continueBtnClick() {
       // this.props.navigation.navigate("PreQuestionPage");
       this.setState(state => (state.isVisible = !state.isVisible, state))
    }


    backButtonClick() {
        this.props.navigation.goBack(null);
    }

  

    render() {

        return (
            <View style={styles.mainContainer}>

                <NaviBar onBackPress={this.backButtonClick}></NaviBar>

                <Image
                    source={logoImage}
                    style={styles.logoImage}
                />

                <View style={styles.descriptionView}>


                    <Text style={styles.descriptionText}
                        numberOfLines={2}>Payment Info Page
                    </Text>

                </View>

         <Button onPress={this.continueBtnClick} title="Continue"></Button>;
  
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

    mainContainer: {
        flex: 1,
        backgroundColor: "white"
    },

    petListContainer: {

        marginTop: 50,
        flexDirection: "column",
        backgroundColor: "transparent",

    },

    listItemCotainer: {

        flexDirection: "row",
        height: 100,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },


    petButtonContainer: {

        flexDirection: "column",
        width: "75%",
        height: 40,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",

    },

    petImageContainer: {
        width: "25%",
        height: 70,
        marginLeft: 5,
        marginBottom: 20,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "flex-start"
    },


    petCategoryText: {

        fontSize: 12,
        color: "black"

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

    imageBackgroundStyle: {
        width: "90%",
        height: "100%",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    imageBackgroundTextStyle: {
        color: "white",
        fontSize: 20
    },
    imageBackgroundImageStyle: {
        borderRadius: 20
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
        marginLeft: 20,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },

    handSymbol: {
        width: 25,
        height: 25
    },

    descriptionText: {
        marginLeft: 15,
        fontSize: 14,
        width: "70%",

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
