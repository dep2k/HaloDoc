import React from "react";
import { FlatList, View, TouchableWithoutFeedback } from "react-native";

import Modal from "react-native-modal";
import DataListItem from "./DataListItem";
import { styles } from "./Styles";

export class DropDown extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.onModalBackPress;
        }}
      >
      <View>
          <Modal backdropOpacity={0.5} isVisible={this.props.modalVisible}>
            <View style={styles.flatListContentContainerStyle}>
              <FlatList
                //contentContainerStyle={styles.flatListContentContainerStyle}
                ItemSeparatorComponent={this.renderSeparator}
                data={this.props.dropDownData}
                renderItem={({ item, index }) => {
                  return (
                    <DataListItem
                      item={item}
                      index={index}
                      onPress={() => {
                        console.log(this.dropDownType);

                        {
                          this.props.dropDownType == "FormRaceDD" &&
                            this.props.onPressDDList(item, "raceDDList");
                        }
                        {
                          this.props.dropDownType == "FormGenderDD" &&
                            this.props.onPressDDList(item, "genderDDList");
                        }
                        {
                          this.props.dropDownType == "ChatDD" &&
                            this.props.onPressDDList(item, "ChatDD");
                        }
                        {
                          this.props.dropDownType == "SpecialityDD" &&
                            this.props.onPressDDList(item, "SpecialityDD");
                        }
                      }}
                    />
                  );
                }}
              />
            </View>
          </Modal>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default DropDown;
