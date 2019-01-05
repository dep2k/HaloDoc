
import React from 'react';
//import { Provider } from "react-redux";
//import store from './src/store'

//import AppStackNavigator from './src/Navigation/AppNavigator'
import HolaVet from './src/Navigation/AppNavigator'
import Amplify, { Auth } from 'aws-amplify';
import NavigationService from './src/NavigationService';
import { setUpLanguage } from './Locale';

Amplify.configure({
  Auth: {
      // REQUIRED - Amazon Cognito Identity Pool ID
      identityPoolId: 'us-west-2:b4a6ebbf-2360-4228-b730-774c255575f1', 
      // REQUIRED - Amazon Cognito Region
      region: 'us-west-2', 
      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'us-west-2_sqQD8B5HZ',
      // OPTIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: '7lg83g328rjlcsqkdsopbjsjhf', 
  },
  aws_appsync_graphqlEndpoint: 'https://5c2vacmlljfhdebtdyf44hlcku.appsync-api.us-west-2.amazonaws.com/graphql',
  aws_appsync_region: 'us-west-2',
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',

});

//const TopLevelNavigator =  AppStackNavigator;
//const App = createAppContainer(TopLevelNavigator);
setUpLanguage();   // for I18n

export default class App extends React.Component {

  render() {
    return (
      <HolaVet ref={navigatorRef => {
             NavigationService.setTopLevelNavigator(navigatorRef);
           }}>
        </HolaVet>
    );
  }
}
