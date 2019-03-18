import React from "react";
import { FlatList, View, TouchableWithoutFeedback,TouchableOpacity } from "react-native";

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
      <View>
       
          <Modal backdropOpacity={0.5} isVisible={this.props.modalVisible}>
          <TouchableWithoutFeedback
            onPress={() => { this.props.onModalBackPress() }}
            style={{ backgroundColor: 'pink' }}
          >
            <View style={{
              position: 'absolute',
              top: -50,
              bottom: -50,
              left: -50,
              right: -50,
              backgroundColor: 'rgba(0,0,0,0)'
            }} />

          </TouchableWithoutFeedback>

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
                        {
                          this.props.dropDownType == "CameraOptionDD" && 
                            this.props.onPressDDList(item, "photoPickDD");
                        }
                      }}
                    />
                  );
                }}
              />

            </View>

          </Modal>


      </View>
        
    );
  }
}

export default DropDown;

