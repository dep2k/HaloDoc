import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import vetListData from '../Data/VetListData';

class FlatListItem extends React.Component {
    render() {
        return (
            <View style= {{
                  flex:1,
                  backgroundColor: 'tomato',
            }}>
              <Text style ={styles.flatListName}>{this.props.item.name}</Text>
                <Text style={styles.flatListCategory}>{this.props.item.category}</Text>
             
            </View>
        );
    }
}

class VetListPage extends React.Component {

    render() {
        return (
            <View style = {styles.mainContainer} >
                <View style = {styles.titleViewContainer}>
                    <Image style = {{height:25, width:22, marginLeft: "10%", backgroundColor: "white",
                    marginRight: "5%"}}>
                    </Image>
                    <Text style = {{color:'white', fontSize: 20, fontWeight:'normal', backgroundColor:'green'}}>
                      DIRECTORIO VETERINARIO
                    </Text>
                </View>
                <View style = {styles.flatListView}>
                    <FlatList data={vetListData}
                        renderItem={({ item, index }) => {
                            return (
                            <FlatListItem item = {item} index = {index}> 
                            </FlatListItem>);
                        }}>

                    </FlatList>
                </View>
                
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "seagreen",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  titleViewContainer: {
    flexDirection: "row",
    height: "8%",
    width: "100%",
    marginTop: "35%",
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    //alignItems: "center"
  },
  flatListView: {
      width: "100%",
      flex :1,
      marginTop: 20,
      backgroundColor:'lightblue'
  },
  flatListName: {
      fontSize: 18,
      marginLeft: 100,
      color : 'white'
  },
  flatListCategory: {
      fontSize:12,
      marginLeft:100,
      marginTop:3,
      color:'white',
      marginBottom: 20
  }

});
export default VetListPage;