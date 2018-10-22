

import React from 'react';
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

import { navBarImage } from "../../images/resource";
import { backBtnImage } from "../../images/resource";
import { nextBtnImage} from "../../images/resource";

import { I18n } from "aws-amplify";

const NaviBar = ({showBackBtn, onBackPress}) => {

return (
    <View style={styles.headerContainer}>

    <ImageBackground
        source={navBarImage}
        style={styles.headerImage}>

            <TouchableOpacity
            style={styles.backBtn}
            onPress = {onBackPress}
            >
            <Image
                source={backBtnImage}
                style={styles.backBtnImage}
            />
            </TouchableOpacity>
      
    </ImageBackground>

    </View>
  );
};



const Footer = ({showBtn, onPress}) => {

    return (

        <View style={styles.footerContainer}>
            <ImageBackground
                source={navBarImage}
                style={styles.headerImage}>

                <TouchableOpacity
                style={styles.continueBtnContainer}
                onPress = {onPress}
                >

                <Text style = {styles.continueText}>{I18n.get("Continue")}</Text>
                <Image
                source={nextBtnImage}
                style={styles.nextBtnImage}
                 />
               
                </TouchableOpacity>
      
          </ImageBackground>
        </View>
      );
    };

export { NaviBar, Footer };


const styles = StyleSheet.create({

    footerContainer: {
        height: "20%",
        marginBottom: 0,
        width: "100%",
      
    },

    continueBtnContainer: {
        marginLeft: 40,
        flexDirection: 'row'
    },

    continueText: {
        color: "white",
        fontSize: 22
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

    backBtn: {
        marginLeft: 20,
        width: 30,
        height: 30,
    },

    backBtnImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },

    nextBtnImage: {
        marginLeft: 10,
        width: 30,
        height: 30,
        resizeMode: "contain",
    }
})


