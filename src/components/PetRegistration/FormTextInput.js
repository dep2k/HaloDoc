
import React from "react";
import {
  Text,
  TextInput,
  View,
} from "react-native";

import { styles } from './Styles'
import { I18n } from "aws-amplify";

class FormTextInput extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.TextInputContainer}>
          <Text style={styles.originSelfText}>{this.props.titleLabel}</Text>
          <TextInput
            underlineColorAndroid={'rgba(0,0,0,0)'}
            style={styles.originTextInputStyle}
            placeholder={this.props.inputPlaceHolder}
            placeholderTextColor="grey"
            onChangeText={text => this.props.onChangeText(text)} />
        </View>
        <View style={styles.lastLineWithMarginBottom} />
      </View>

    );
  }
}

export default FormTextInput