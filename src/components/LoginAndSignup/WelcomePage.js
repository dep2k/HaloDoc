import React from "react";
import { View, Image, StyleSheet, Text ,ImageBackground} from "react-native";
import NavigationService from '../../NavigationService';


class Welcomepage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    //this.props.initializeApp()
    setTimeout(() => {
      NavigationService.navigate('LoginPage');
    }, 1000);
  }

  componentWillUnmount(){
   // clearTimeout(this.timeoutHandle); 
   // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
  }



  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={require("../images/WelcomeScreen.png")}
          style={styles.backgroundImage}
        />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    width: undefined,
    height: undefined
  }
});
export default Welcomepage;