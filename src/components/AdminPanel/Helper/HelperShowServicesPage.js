
import React from "react";
import { I18n } from "aws-amplify";

import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity
} from "react-native";

const base = "../../../images/";
const navbarImage = require(base + "navbarImage.png");
const backButtonImage = require(base + "BackButtonShape.png");
const logoImage = require(base + "logoImage.png");

class HelperShowServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.backButtonClick = this.backButtonClick.bind(this);
    }

    backButtonClick() {
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <ImageBackground
                        source={navbarImage}
                        style={styles.headerImage}
                    >
                        <TouchableOpacity
                            style={styles.backButtonStyle}
                            onPress={this.backButtonClick}
                        >
                            <Image
                                source={backButtonImage}
                                style={styles.backButtonImageStyle}
                            />
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={styles.logoImageContainer}>
                    <Image
                        source={logoImage}
                        style={styles.logoImage}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",

        alignItems: 'center'
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
        height: "100%"
    },
    backButtonStyle: {
        backgroundColor: "transparent",
        width: "12%",
        height: "20%",
        marginLeft: "5%",
        marginTop: "7%",
        justifyContent: "center",
        alignItems: "center"
    },
    backButtonImageStyle: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain"
    },
    logoImageContainer: {
        width: "100%",
        height: "15%",
        // backgroundColor: 'green', 
        flexDirection: 'row'
    },
    logoImage: {
        width: "25%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain',
        marginLeft: "65%",
        marginTop: "5%"
    },
    middleContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        //backgroundColor: "pink",
        width: "100%",
        height: "50%",
        alignItems: "center",
        paddingTop: "10%"
    },
   
});

export default HelperShowServicesPage;
