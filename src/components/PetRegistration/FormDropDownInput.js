
import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
} from "react-native";

import { styles } from './Styles'
import { I18n } from "aws-amplify";

const base = "../../images/";
const dropDownImage = require(base + "dropDownIcon.png");

class FormDropDownInput extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.TextInputContainer}>
                    <Text style={styles.originText}>{this.props.titleLabel}</Text>
                    <TouchableOpacity
                        style={styles.dropDownButtonStyle}
                        onPress={() => this.props.onPress()}>
                        <Text style={styles.dropDownButtonTextStyle}>
                            {this.props.dropDownValue}
                        </Text>
                        <Image style={styles.dropDownIconStyle} source={dropDownImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.lastLineStyle} />
            </View>

        );
    }
}

export default FormDropDownInput