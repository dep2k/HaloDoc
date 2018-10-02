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

const base = "../../../images/"
const backgroundImage = require(base + "newBackground.png")

class HelperDoctorsListPage extends React.Component {
    constructor(props) {
        super(props);
        this.logOutButtonClick = this.logOutButtonClick.bind(this);
        this.backButtonClick = this.backButtonClick.bind(this);
        this.helperButtonClick = this.helperButtonClick.bind(this);
        this.doctorButtonClick = this.doctorButtonClick.bind(this);
    }
    backButtonClick() {
        this.props.navigation.goBack(null);
    }
    helperButtonClick() {
        this.props.navigation.navigate("HelperLoginPage");
    }
    doctorButtonClick() {
        this.props.navigation.navigate("DoctorLoginPage");
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
                    source={backgroundImage}
                    style={styles.fullBackgroundImage}
                    imageStyle={styles.fullbackgroundImageStyle}
                >
                    <View style={styles.topContainer}>
                        <TouchableOpacity
                            style={styles.backButtonStyle}
                            onPress={this.backButtonClick}
                        >
                            <Image
                                source={require("../../../images/BackButtonShape.png")}
                                style={styles.backButtonImageStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.doctorsDirectoryText}>
                        {I18n.get("DoctorsDirectory")}
                    </Text>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    topContainer: {
        height: "7%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    
    },
    backButtonStyle: {
        backgroundColor: "transparent",
        width: "20%",
        height: "25%",
        marginLeft: "1%",
        marginTop: "7%",
        justifyContent: "center",
        alignItems: "center"
    },
    backButtonImageStyle: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        resizeMode: 'contain'
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
    doctorsDirectoryText:{
        fontSize: 21,
        color:'white',
        marginTop: "15%"
    }
    
   
   
});
export default HelperDoctorsListPage;
