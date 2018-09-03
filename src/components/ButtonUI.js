import React from "react";
import { View, Alert, Button, StyleSheet, Text, Platform, TouchableHighlight
,TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";

class ButtonUI extends React.Component {
    _onPressButton () {
    Alert.alert('You tapped the button!');
    }
    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }


    render() {
        return (
        //    <View style= {styles.container}>
        //         <View style={styles.buttonContainer}>
        //             <Button
        //                 onPress={this._onPressButton}
        //                 title="Press Me"
        //             />
        //         </View>
        //          <View style={styles.buttonContainer}>
        //             <Button
        //                 onPress={this._onPressButton}
        //                 title="Press Me"
        //                 color="#841584"
        //             />
        //         </View>
        //         <View style={styles.alternativeLayoutButtonContainer}>
        //             <Button
        //                 onPress={this._onPressButton}
        //                 title="This looks great!"
        //             />
        //             <Button
        //                 onPress={this._onPressButton}
        //                 title="OK!"
        //                 color="#841584"
        //             />
        //         </View>
        //    </View>
            <View style={styles.container}>
                <TouchableHighlight
                        onPress={this._onPressButton}
                         underlayColor= "white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                 </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                {/* <TouchableNativeFeedback
                    onPress={this._onPressButton}
                    background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback> */}
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
   container: {
       flex: 1,
       justifyContent: 'center'
  },
  buttonContainer: {
      margin: 20
  },
 alternativeLayoutButtonContainer: {
     margin :20,
     flexDirection: 'row',
     justifyContent: 'space-between'
 },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})

export default ButtonUI;