import React from "react";
import { FlatList, View, TouchableWithoutFeedback } from "react-native";

import Modal from "react-native-modal";
import DataListItem from "./DataListItem";
import { styles } from "./Styles";

export class DropDown extends React.Component {

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          marginHorizontal: "5%",
          backgroundColor: "#CED0CE",
         // marginLeft: "14%"
        }}
      />
    );
  };
  render() {
    return (
       
          <Modal backdropOpacity={0.5} isVisible={this.props.modalVisible}>
        <TouchableWithoutFeedback
          onPress= {this.props.onModalBackPress}
          >
            <View style={styles.flatListContentContainerStyle}>
              <FlatList
               // contentContainerStyle={styles.flatListContainerStyle}
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
              </TouchableWithoutFeedback>
          </Modal>
         
    );
  }
}

export default DropDown;
