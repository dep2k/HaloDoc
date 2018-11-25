import React from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from './Styles';
import { I18n } from "aws-amplify";
import { CheckBox } from "react-native-elements";


export class FormDateInput extends React.Component {

    render() {
      return (
        <View>
          <View style={styles.firstTextInputContainer}>
            <Text style={styles.dogVacText}>{this.props.titleLabel}</Text>
            <CheckBox
              center
              containerStyle={styles.vacCheckboxContainerStyle}
              checkedIcon="dot-circle-o"
              checkedColor="grey"
              uncheckedColor="grey"
              uncheckedIcon="circle-o"
              checked={this.props.isChecked}
              onPress={() => this.props.onCheckboxPress()}/>
            <Text style={styles.pvcText}>{I18n.get("Date")}</Text>
            <TextInput
              style={styles.vaccAndDespatextInputStyle}
              placeholder="DD/MM/AAAA"
              placeholderTextColor={"grey"}
              onChangeText={text => this.props.onChangeText(text)}/>
          </View>
          <View style={styles.lastLineStyle} />
        </View>
      );
    }
  }

  export default FormDateInput