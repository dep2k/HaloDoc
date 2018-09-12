import React  from 'react';
import {connect} from 'react-redux'
//import gql from 'graphql-tag'

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

              <TouchableOpacity >
                <Text>Increment</Text>
              </TouchableOpacity>

              <Text>Something</Text>

              <TouchableOpacity >
                <Text>Decrement</Text>
              </TouchableOpacity>

          </View>
      )
  }
}

export default LoginPage;

