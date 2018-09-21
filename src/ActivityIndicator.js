import React, { Component } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';
export default ActivityIndicatorExample = (props) => {
    return (
        
            <ActivityIndicator animating={props.animating}
                               style={styles.activityIndicator}
                               size="large"
                               color = "black"
            />
       
    );
}
const styles = StyleSheet.create({
    
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
        // opacity: 0.3,
        height:40
        
    }
});




