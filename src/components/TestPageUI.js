import React from "react";
import { View, StyleSheet, Text } from "react-native";




class TestPageUI extends React.Component {
  render() {
    return (
      // <View>
      //   <Text style={styles.red}>just red</Text>
      //   <Text style={styles.bigblue}>just bigblue</Text>
      //   <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
      //   <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      // </View>
       
     //For justifyContent available options are
     //flex-start, center, flex-end, space-around, space-between and space-evenly.

        <View style={{ flex: 1, flexDirection: 'column',justifyContent: 'center', justifyContent:'space-evenly',
                       alignItems: 'center'}}>
        <View style={{ width: 150, height: 150, backgroundColor: 'powderblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'skyblue' }} />
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }} />
      </View>


      // <View style={{ flex: 1 }}>
      //   <View style={{ flex: 2, backgroundColor: 'powderblue' }} />
      //   <View style={{ flex: 1, backgroundColor: 'skyblue' }} />
      //   <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });


export default TestPageUI;
