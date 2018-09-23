import React, { Component } from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet
} from 'react-native';

export default Loader = (props) => {

    return (
<<<<<<< HEAD
    
        <ActivityIndicator animating={props.animating}
            style = {styles.activityIndicator}
            size="large"
            color="black"
        /> 
=======
        
        <ActivityIndicator animating={props.animating}
                            style={styles.activityIndicator}
                            size="large"
                            color = "black"
        />
>>>>>>> 1c8c59886f39b7d17296059b6468df173cffcc79
    );


}
const styles = StyleSheet.create({
<<<<<<< HEAD
   
=======
    
>>>>>>> 1c8c59886f39b7d17296059b6468df173cffcc79
    activityIndicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
        // opacity: 0.5,
  
    }
});




