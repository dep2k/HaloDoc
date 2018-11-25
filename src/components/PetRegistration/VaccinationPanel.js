import React from "react";
import {

  View,
  Text,

} from "react-native";

import RadioForm from "react-native-simple-radio-button";
import { styles } from './Styles';
import { I18n } from "aws-amplify";
import { DogPanel, CatPanel, HorsePanel } from './VaccinationChildPanels'

var radio_props = [{ label: "Yes", value: 0 }, { label: "No", value: 1 }];
export class VaccinationPanel extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.vaccinationText}>
          {I18n.get("Vaccination")}
        </Text>

        {this.props.petType == "dog" && 
          <DogPanel 
            vaccinationDict = {this.props.vaccinationDict}
            onCheckboxPress = {(type) => this.props.onCheckboxPress(type)}
            onChangeText = {(text,type) => this.props.onChangeText(text,type)}>
          </DogPanel>
        }
        {this.props.petType == "cat" &&
           <CatPanel 
             vaccinationDict = {this.props.vaccinationDict}
             onCheckboxPress = {(type) => this.props.onCheckboxPress(type)}
             onChangeText = {(text,type) => this.props.onChangeText(text,type)}>
           </CatPanel>
        }
        {this.props.petType == "horse" && 
          <HorsePanel  
              vaccinationDict = {this.props.vaccinationDict} 
              onCheckboxPress = {(type) => this.props.onCheckboxPress(type)}
              onChangeText = {(text,type) => this.props.onChangeText(text,type)}>
          </HorsePanel>}

      </View>);
  }
}

export default VaccinationPanel
