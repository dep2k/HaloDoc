import { Auth } from "aws-amplify";
import React from "react";
import { I18n } from "aws-amplify";

import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Button,
    ImageBackground
} from "react-native";

import Loader from "../../../ActivityIndicator";

class DoctorLoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: false
        };

        this._onSignInClick = this._onSignInClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
    }
    startActivityIndicator() {
        this.setState({ animating: true });
    }

    closeActivityIndicator() {
        this.setState({ animating: false });
    }
    backButtonClick() {
        this.props.navigation.goBack(null);
    }

    componentDidMount() {
        //this.props.initializeApp()
    }

    componentWillUnmount() {
        // clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }


    _onSignInClick() {
       
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContainer}>
                    <View style={styles.headerContainer}>
                        <ImageBackground
                            source={require("../../../images/navbarImage.png")}
                            style={styles.headerImage}
                        >
                            <TouchableOpacity
                                style={styles.backButtonStyle}
                                onPress={this.backButtonClick}
                            >
                                <Image
                                    source={require("../../../images/BackButtonShape.png")}
                                    style={styles.backButtonImageStyle}
                                />
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style={styles.logoImageContainer}>
                        <Text style={styles.helperText}>
                            {I18n.get('Doctor')}
                        </Text>
                        <Image
                            source={require("../../../images/logoImage.png")}
                            style={styles.logoImage}
                        //imageStyle={styles.logoImageimageStyle}
                        >
                        </Image>
                    </View>

                    // Contains Input Filds and Login Button
                    <View style={styles.middleContainer}>
                        // Username Field
                        <Text style={styles.loginText}>{I18n.get("Username")}</Text>
                        <TextInput
                            autoCapitalize={"none"}
                            returnKeyType={"next"}
                            onSubmitEditing={() => {
                                this.secondTextInput.focus();
                            }}
                            blurOnSubmit={false}
                            style={styles.textInput}
                            onChangeText={
                                text =>
                                    this.setState(state => ((state.user.username = text), state)) // placeholder={I18n.get('Username')}
                            }
                        />
                        // Password Field
                        <Text style={styles.passwordText}>{I18n.get("Password")}</Text>
                        <TextInput
                            ref={input => {
                                this.secondTextInput = input;
                            }}
                            secureTextEntry={true}
                            style={styles.textInput}
                            onChangeText={
                                text =>
                                    this.setState(state => ((state.user.password = text), state)) //placeholder="Password"
                            }
                        />
                        //SignINButton
                        <TouchableOpacity
                            onPress={this._onSignInClick}
                            style={styles.loginButton}
                        >
                            <ImageBackground
                                source={require("../../../images/loginButtonImage.png")}
                                style={styles.imageBackgroundStyle}
                                imageStyle={styles.imageBackgroundImageStyle}
                            >
                                <Text style={styles.imageBackgroundTextStyle}>
                                    {I18n.get("Enter")}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    {this.state.animating && <Loader animating={this.state.animating} />}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
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
    helperText: {
        fontSize: 12,
        color: "grey",
        marginLeft: "10%",
        marginTop: "12%"
    },
    logoImage: {
        width: "25%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain',
        marginLeft: "40%",
        marginTop: "5%"
    },
    loginButton: {
        height: "15%",
        width: "90%",
        // backgroundColor:'mediumseagreen',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
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
    textInput: {
        height: "14%",
        width: "90%",
        borderRadius: 20,
        backgroundColor: "#F8F8F8",
        marginBottom: "10%",
        paddingHorizontal: "5%"
    },
    loginText: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#7C7B7B",
        marginBottom: 5,
        marginRight: "60%"
    },
    passwordText: {
        fontSize: 15,
        fontWeight: "normal",
        color: "#7C7B7B",
        marginBottom: 5,
        marginRight: "60%"
    },
    imageBackgroundStyle: {
        width: "100%",
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
    forgotPasswordButton: {
        fontSize: 17,
        marginTop: "5%",
        marginBottom: "8%"
    }
});

export default DoctorLoginPage;
