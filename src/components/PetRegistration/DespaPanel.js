import React from "react";
import {

  View,
  Text,
} from "react-native";

import RadioForm from "react-native-simple-radio-button";
import { I18n } from "aws-amplify";

import  FormDateInput  from './FormDateInput';
import  FormTextInput  from './FormTextInput';

var radio_props = [{ label: "Yes", value: 0 }, { label: "No", value: 1 }];

import { styles } from './Styles';

export class DespaPanel extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.despaText}>{I18n.get("Despa")}</Text>
      
        <View style={styles.despaContainer}>

          <FormTextInput titleLabel={I18n.get('Product')}
            // inputPlaceHolder={I18n.get('Product')}
            inputText={""}
            onChangeText={text => this.props.onChangeText(text,"Product")}>
          </FormTextInput>

          <FormTextInput titleLabel={I18n.get('Date')}
            // inputPlaceHolder={I18n.get('DD/MM/YYYY')}
            inputText={""}
            onChangeText={text => this.props.onChangeText(text,"Date")}>
          </FormTextInput>

          <FormTextInput titleLabel={I18n.get('Feeding')}
            // inputPlaceHolder={I18n.get('Feeding')}
            inputText={""}
            onChangeText={text => this.props.onChangeText(text,"Feeding")}>
          </FormTextInput>

        </View>

      </View>
    );

  }
}


export default DespaPanel;