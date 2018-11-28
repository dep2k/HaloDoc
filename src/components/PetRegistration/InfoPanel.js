import React from "react";
import {
  View,
} from "react-native";

import { I18n } from "aws-amplify";
import FormTextInput from "./FormTextInput";
import FormDropDownInput from "./FormDropDownInput";
import { styles } from './Styles';

export class InfoPanel extends React.Component {

  render() {
    return (
     
        <View style={styles.clinicHistoryContainer}>
          <FormTextInput titleLabel = {I18n.get('Name')}
            inputPlaceHolder = {I18n.get('NameOfPet')}
            inputText = {this.props.name}
            onChangeText = {text => this.props.onChangeText(text,'FormNameTI')}>
           </FormTextInput>
         
          <FormDropDownInput
            titleLabel={I18n.get("Race")}
            dropDownValue = {this.props.race}
            onPress = {() => this.props.onPress('FormRaceDD')}>
          </FormDropDownInput>


          <FormTextInput titleLabel = {I18n.get('Color')}
            inputPlaceHolder = {I18n.get('Color')}
            inputText = {this.props.color}
            onChangeText = {text => this.props.onChangeText(text,'FormColorTI')}>
          </FormTextInput>
       
          <FormDropDownInput
            titleLabel={I18n.get("Sex")}
            dropDownValue = {this.props.gender}
            onPress = {() => this.props.onPress('FormGenderDD')}>
          </FormDropDownInput>

          <FormTextInput titleLabel = {I18n.get('Age')}
            inputPlaceHolder = {I18n.get('WriteAge')}
            inputText = {this.props.age}
            onChangeText = {text => this.props.onChangeText(text,'FormAgeTI')}>
           </FormTextInput>

          
          <FormTextInput titleLabel = {I18n.get('Origin')}
             inputPlaceHolder = {I18n.get('Origin')}
             inputText = {this.props.origin}
             onChangeText = {text => this.props.onChangeText(text,'FormOriginTI')}>
           </FormTextInput>

        </View>
      );
  }
}


export default InfoPanel

