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
import { nextBtnImage } from "../../images/resource";
import { I18n } from "aws-amplify";

export class NavBar extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    source={navBarImage}
                    style={styles.headerImage}>

                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={this.props.onBackPress}>
                        <Image
                            source={backBtnImage}
                            style={styles.backBtnImage}
                        />
                    </TouchableOpacity>

                    {this.props.title && 
                        <Text style={styles.headerText}>{this.props.title}
                        </Text>
                    }

                    {this.props.rightButton &&
                        <Button style={styles.rightButton}
                            color="#ffffff"
                            title={this.props.rightButton}
                            onPress={this.props.rightButtonClick}>
                        </Button>
                    }
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    rightButton: {
        marginTop: 50,
        marginRight: 55,
        width: 30,
        height: 18,
        backgroundColor: "#BED885",
    },

    headerContainer: {
        height: 70,
        //height: "10%",
        marginTop: 0,
        width: "100%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        
    },

    headerImage: {

        width: "100%",
        height: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    headerText: {
        marginTop: 30,
        width: "70%",
        textAlign: 'center',
        color: 'white',
        fontSize: 20,

    },

    backBtn: {
        marginTop: 20,
        marginLeft: 25,
        width: 30,
        height: 30,
    },

    backBtnImage: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },


})


