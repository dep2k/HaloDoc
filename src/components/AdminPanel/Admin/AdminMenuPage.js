import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import SVGImage from "react-native-svg-image";
import { I18n } from "aws-amplify";

class MainMenuPage extends React.Component {
    constructor(props) {
        super(props);
        this.logOutButtonClick = this.logOutButtonClick.bind(this);
    }

    logOutButtonClick() {
        // this.props.navigation.dispatch(
        //   this.props.NavigationActions.reset({
        //     index: 1,
        //     actions: [
        //       this.props. NavigationActions.navigate({ routeName: 'Router' }),
        //       this.props. NavigationActions.navigate({ routeName: 'LoginPage' }),
        //     ],
        //   }),
        // )
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <SVGImage style={StyleSheet.absoluteFill} />
    });
    render() {
        return (
            <View style={styles.mainContainer}>
                <ImageBackground
                    source={require("../../../images/newBackground.png")}
                    style={styles.fullBackgroundImage}
                    imageStyle={styles.fullbackgroundImageStyle}
                >
                    <Text style={styles.menuText}>MENU</Text>
                    <View style={styles.buttonsMainContainer}>
                        <View style={styles.singleButtonContainer}>
                            <Image
                                style={styles.iconImagesStyle}
                                source={require("../../../images/ImageLogo.jpg")}
                            />
                            <TouchableOpacity>
                                <Text style={styles.touchableOpacityText}>
                                    {I18n.get("Helper")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.singleButtonContainer}>
                            <Image
                                style={styles.iconImagesStyle}
                                source={require("../../../images/ImageLogo.jpg")}
                            />
                            <TouchableOpacity>
                                <Text style={styles.touchableOpacityText}>
                                    {I18n.get("Doctor")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.singleButtonContainer}>
                            <Image
                                style={styles.iconImagesStyle}
                                source={require("../../../images/ImageLogo.jpg")}
                            />
                            <TouchableOpacity>
                                <Text style={styles.touchableOpacityText}>
                                    {I18n.get("ADMINISTRATOR")}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1

        // backgroundColor: "#BED885"
    },
    fullBackgroundImage: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    fullbackgroundImageStyle: {
        position: "absolute",
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    menuText: {
        fontSize: 25,
        color: "white",
        marginTop: "15%",
        fontWeight: "bold",
        marginBottom: "15%"
    },
    buttonsMainContainer: {
        flexDirection: "column",
        flex: 0.4,
        width: "100%",
        justifyContent: "flex-start",
        justifyContent: "space-evenly"
        // backgroundColor: "pink"
    },
    singleButtonContainer: {
        flexDirection: "row",
        height: "20%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center"
        // backgroundColor: "pink"
    },
    iconImagesStyle: {
        width: 40,
        height: 40,
        marginLeft: "5%",
        marginRight: "5%"
    },
    touchableOpacityText: {
        fontSize: 20,
        color: "white",
        fontWeight: "normal"
    }
});
export default MainMenuPage;
