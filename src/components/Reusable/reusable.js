

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

export { NaviBar };


const styles = StyleSheet.create({

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
    }
})


