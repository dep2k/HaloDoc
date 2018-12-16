import React from "react";
import {
  FlatList,
  View,
} from "react-native";

import Modal from "react-native-modal";
import DataListItem from './DataListItem';
import { styles } from './Styles';

export class DropDown extends React.Component {

    render(){
      return(
        <View>
        <Modal backdropOpacity={0.5} isVisible={this.props.modalVisible}>
        <FlatList
          contentContainerStyle={styles.flatListContentContainerStyle}
          ItemSeparatorComponent={this.renderSeparator}
          data={this.props.dropDownData}
          renderItem={({ item, index }) => {
            return (
              <DataListItem
                item={item}
                index={index}
                onPress={() => {
                  {this.props.dropDownType == "FormRaceDD" && this.props.onPressDDList(item, 'raceDDList')}
                  {this.props.dropDownType == "FormGenderDD" && this.props.onPressDDList(item, 'genderDDList')}
                  {this.props.dropDownType == "ChatDD" && this.props.onPressDDList(item, 'ChatDD')}
                }}
              />
            );
          }}
        />
        }
      </Modal>
      </View>
      );
    }
}

export default DropDown;


