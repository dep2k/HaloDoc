import React from "react";
import {FlatList, StyleSheet, Text, View} from  'react-native';

class TestFlatList extends React.Component {
    render(){
        return (
            <View style = {styles.container}>
               <FlatList
                   data = {[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'john'}
                   ]}
                   renderItem= {({item})=>  <Text style= {styles.item}>{item.key}</Text>}
               />
          
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default TestFlatList;