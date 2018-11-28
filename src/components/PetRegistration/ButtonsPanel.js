import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,

} from "react-native";
import { I18n } from "aws-amplify";

import { styles } from './Styles';
const base = "../../images/";
const buttonImage = require(base + "loginButtonImage.png");


export class ButtonsPanel extends React.Component {

    render() {
        return (
            <View style={styles.saveButtonContainer}>
                <TouchableOpacity
                    style={styles.saveButtonStyle}
                    onPress={()=>this.props.onPress("SaveClick")}>
                    <ImageBackground
                        source={buttonImage}
                        style={styles.buttonImageBackgroundStyle}
                        imageStyle={styles.buttonImageBackgroundImageStyle} >
                        <Text style={styles.saveButtonTextStyle}>{I18n.get("Save")}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.saveAndRegisterButton}
                    onPress={()=>this.props.onPress("SaveAndRegisterClick")}>
                    <ImageBackground
                        source={buttonImage}
                        style={styles.buttonImageBackgroundStyle}
                        imageStyle={styles.buttonImageBackgroundImageStyle}>
                        <Text style={styles.saveAndRegisterText}>
                            {I18n.get("SaveAndRegister")}
                        </Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        );
    }
}


export default ButtonsPanel

