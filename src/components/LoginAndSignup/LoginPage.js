import React  from 'react';
import {connect} from 'react-redux'

import {
  Stylesheet,
  Text,
  View,
  Button,
  TouchableOpacity

} from 'react-native';



class LoginPage extends React.Component {


  render() {
      return (
          <View>
              <Button
                onPress={ () => this.props.navigation.navigate('Home')}
                title="Go To Home"
                color="#ffaa00" />

                <TouchableOpacity onPress = {()=>this.props.increaseCounter()} >
                  <Text>Strings.hello</Text>
                </TouchableOpacity>

                <Text>{this.props.counter}</Text>

                <TouchableOpacity onPress = {() => this.props.decreaseCounter()}>
                  <Text>Decrement</Text>
                </TouchableOpacity>

          </View>
      )
  }
}



function mapStateToProps (state) {
  return {
    counter: state.counter
  }
}

function  mapDispatchToProps (dispatch) {
  return {
    increaseCounter: () =>   dispatch({type:'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type:'DECREASE_COUNTER'}),
    
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(LoginPage)