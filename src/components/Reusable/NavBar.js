import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    Button,
    ActivityIndicator
} from "react-native";

import { navBarImage } from "../../images/resource";
import { backBtnImage } from "../../images/resource";
import { nextBtnImage } from "../../images/resource";
import { I18n } from "aws-amplify";

export class NavBar extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <ImageBackground
                    source={navBarImage}
                    style={{
                        width: "100%",
                        height: "100%",
                        flexDirection:'row',
                        justifyContent:'center',
                        alignContent:'center'}}>
                    <View style={styles.headerContainer2} >
                        <TouchableOpacity
                            style={styles.backBtn}
                            onPress={this.props.onBackPress}>
                            <Image
                                source={backBtnImage}
                                style={styles.backBtnImage}
                            />
                        </TouchableOpacity>

                        {this.props.title &&
                        <View style={{width:200,flexDirection:'row',justifyContent:"space-around",backgroundColor:'transparent'}}>
                            <Text style={styles.headerText}>{this.props.title}
                            </Text>
                        </View>
                            
                        }

                        {!!this.props.rightButton ?
                            <TouchableOpacity
                                onPress={this.props.rightButtonClick}>
                                <Text style={{ color: "#ffffff" }}>{this.props.rightButton}</Text>
                            </TouchableOpacity>
                             : <Text>    </Text>
                        }
</View>
                   
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  rightButton: {    
    width: 30,
    height: 18,
    backgroundColor: "#BED885"
  },

  headerContainer: {
    height: 70,
    //height: "10%",
    marginTop: 0,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },

  headerContainer2: {
    width: "96%",
    height: "100%",
    marginTop:10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
      marginLeft:5,
    color: "white",
    fontSize: 20,
   // backgroundColor: "pink"
  },

  backBtn: {
    width: 30,
    height: 30,
   // backgroundColor: "black"
  },

  backBtnImage: {
    width: 30,
    height: 30,
    resizeMode: "contain"
  }
});


