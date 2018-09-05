import React from 'react';


import {
    Text,
    TextInput,
    View,
    StyleSheet,
    Button,
    TouchableHighlight
} from 'react-native';




class TestLoginPage extends React.Component {
    
  render() {
      let pic = { uri: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiFgNi87qDdAhUBKY8KHbjWDW0QjRx6BAgBEAU&url=http%3A%2F%2Fprofilog.biz%2F&psig=AOvVaw1bwlqEZaCzBTxcErakToJC&ust=1536133771866393" };
    return <View style={{ flex: 1, backgroundColor: "blue", flexDirection: "row" }}>
        <View style={styles.leftContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              margin: 20,
              width: 150
            }}
          >
            WELCOME
          </Text>
        </View>
        <View style={styles.centerContainer}>
          <View style={{ width: 1, height: 500, backgroundColor: "white" }} />
        </View>
        <View style={styles.rightContainer}>
          <TextInput style={{ padding: 2, marginBottom: 10, height: 40, width: 160, backgroundColor: "white" }} placeholder="Enter your email!" />
          <TextInput style={{ padding: 2, marginBottom: 10, height: 40, width: 160, backgroundColor: "white" }} placeholder="Password" />
            <TouchableHighlight
                onPress={this._onPressButton}
                underlayColor="white">
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableHighlight>
          <Text
            style={{
              fontWeight: "normal",
              fontSize: 12,
              color: "black",
              marginTop: 10,
             textDecorationLine: 'underline',
            }}
          >
            Forgot password?
          </Text>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
    
    leftContainer: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
     centerContainer: {
         flex : 0.5,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor : 'lightblue'
     },
    rightContainer: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'lightblue'
    },
    button: {
        marginBottom: 30,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: '#0000',
        height:40
    },
    buttonText: {
        color: 'white'
    }
});

export default TestLoginPage;