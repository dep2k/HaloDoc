import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from "react-native";

import { logoImage } from "../../images/resource";

export class LogoImage extends React.Component {

    render() {
        return  <Image
                source={logoImage}
                style={styles.logoImage}
            />
         
    }
}

const styles = StyleSheet.create({

    logoImage: {
        alignSelf: 'flex-end',
        resizeMode: "contain",
        marginTop: 10,
        width: 80,
        height: 60,
        marginRight: 35,

    },


})
