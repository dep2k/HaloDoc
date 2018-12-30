import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./Styles";

class DataListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.cellContainer}
      >
        <View style = {styles.textContainer}>
          <Text style={styles.nameText}>{this.props.item.name}</Text>
        </View>

        {/* <View> style = {styles.seperatorLine}</View> */}
      </TouchableOpacity>
    );
  }
}

export default DataListItem;
