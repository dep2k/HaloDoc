import React from "react";
import {

  View,
  Text,

} from "react-native";

import { FormDateInput } from './FormDateInput';
import { styles } from './Styles';
import { I18n } from "aws-amplify";


export class DogPanel extends React.Component {

  render() {
    return (
      <View style={styles.vaccinationContainer}>

        <FormDateInput titleLabel={I18n.get("Pvc")}
          isChecked={this.props.vaccinationDict.dog.PVC.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("PVC")}
          onChangeText={(text) => this.props.onChangeText(text,"PVC")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Triple")}
          isChecked={this.props.vaccinationDict.dog.TRIPLE.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("TRIPLE")}
          onChangeText={(text) => this.props.onChangeText(text,"TRIPLE")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Rage")}
          isChecked={this.props.vaccinationDict.dog.RAGE.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("RAGE")}
          onChangeText={(text) => this.props.onChangeText(text,"RAGE")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Other")}
          isChecked={this.props.vaccinationDict.dog.OTHER.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("OTHER")}
          onChangeText={(text) => this.props.onChangeText(text, "OTHER")}>
        </FormDateInput>
      </View>
    );
  }
}

export class CatPanel extends React.Component {

  render() {
    return (
      <View style={styles.vaccinationContainer}>
        <FormDateInput titleLabel={I18n.get("TripleViral")}
          isChecked={this.props.vaccinationDict.cat.TRIPLEVIRAL.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("TRIPLEVIRAL")}
          onChangeText={(text) => this.props.onChangeText(text,"TRIPLEVIRAL")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("FelineRage")}
          isChecked={this.props.vaccinationDict.cat.FELINERAGE.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("FELINERAGE")}
          onChangeText={(text) => this.props.onChangeText(text,"FELINERAGE")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Other")}
          isChecked={this.props.vaccinationDict.cat.OTHER.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("OTHER")}
          onChangeText={(text) => this.props.onChangeText(text,"OTHER")}>
        </FormDateInput>
      </View>
    );
  }
}

export class HorsePanel extends React.Component {

  render() {
    return (
      <View style={styles.vaccinationContainer}>
        <FormDateInput titleLabel={I18n.get("Influenza")}
          isChecked={this.props.vaccinationDict.horse.INFLUENZA.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("INFLUENZA")}
          onChangeText={(text) => this.props.onChangeText(text,"INFLUENZA")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Tetanus")}
          isChecked={this.props.vaccinationDict.horse.TETANUS.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("TETANUS")}
          onChangeText={(text) => this.props.onChangeText(text,"TETANUS")}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Encephalitis")}
          isChecked={this.props.vaccinationDict.horse.ENCEPHALITIS.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("ENCEPHALITIS")}
          onChangeText={(text) => this.props.onChangeText(text, ENCEPHALITIS)}>
        </FormDateInput>

        <FormDateInput titleLabel={I18n.get("Other")}
          isChecked={this.props.vaccinationDict.horse.OTHER.isChecked}
          onCheckboxPress={() => this.props.onCheckboxPress("ENCEPHALITIS")}
          onChangeText={(text) => this.props.onChangeText(text, OTHER)}>
        </FormDateInput>

      </View>
    );
  }
}