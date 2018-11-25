
import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";

import { styles } from './Styles';

class DataListItem extends React.Component {
    render() {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
          style={styles.cellContainer}
        >
          <Text style={styles.nameText}>{this.props.item.name}</Text>
        </TouchableOpacity>
      );
    }
  }

  export default DataListItem