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
                            style={styles.activityIndicator}
                            size="large"
                            color = "black"
        />
=======
    
        <ActivityIndicator animating={props.animating}
            style = {styles.activityIndicator}
            size="large"
            color="black"
        /> 
>>>>>>> cf80cd548421270027350e3f87693515ee72d80e
    );

}
const styles = StyleSheet.create({
<<<<<<< HEAD
    
=======
   
>>>>>>> cf80cd548421270027350e3f87693515ee72d80e
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




