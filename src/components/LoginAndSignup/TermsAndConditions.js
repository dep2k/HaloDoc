
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";


class TermsAndConditions extends React.Component {
  constructor(props) {
    super(props);

     this.backButtonClick = this.backButtonClick.bind(this);
    }

   backButtonClick(){
           this.props.navigation.goBack(null);
       }

    render() {
    return (
      <View style={styles.mainContainer}>
         <View style={styles.headerContainer}>
             <TouchableOpacity style = {{backgroundColor:"transparent",width:"15%", height:"80%",marginLeft: 8, justifyContent: 'center',
                                          alignItems:'center'}}
                                    onPress={this.backButtonClick}>
                         <Image source = {require('../../images/backButton.png')}
                                        style= {{width:"40%", height:"50%", justifyContent:'center',
                                                 alignItems: 'center'}}>
                       </Image>  
             </TouchableOpacity> 
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'white'
  },
  headerContainer: {
        height: "12%",
        marginTop: 0,
        width: "100%",
       // backgroundColor:"green",
        justifyContent: "flex-end",
        alignItems:"flex-start"
       },
});

export default TermsAndConditions;