import React, { Component } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';

export default Loader = (props) => {

    return (
        
        <View style={styles.container}>
            <ActivityIndicator animating={props.animating}
                size="large"
                color="black"
            />
        </View>
     
    );


}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
    },
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        opacity: 0.5,
  
    }
});




