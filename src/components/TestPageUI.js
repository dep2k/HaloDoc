import React from "react";
import { View, StyleSheet, Text } from "react-native";
import I18n from 'ex-react-native-i18n'


class TestPageUI extends React.Component {
  // Async call to init the locale
  componentWillMount() {
    I18n.initAsync();
  }
  render() {
    return <Text>{I18n.t("greeting")}</Text>;
  }
}

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true

I18n.translations = {
  en: {
    greeting: 'Hi!'
  },
  es: {
    greeting: 'Bonjour!'
  }
}

export default TestPageUI;
