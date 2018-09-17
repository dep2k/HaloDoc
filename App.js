
import React from 'react';
//import { Provider } from "react-redux";
//import store from './src/store'

import AppStackNavigator from './src/Navigation/AppNavigator'
import Amplify, { Auth } from 'aws-amplify';
import NavigationService from './src/NavigationService';
import { setUpLanguage } from './Locale';

Amplify.configure({

  "graphqlEndpoint": "https://5c2vacmlljfhdebtdyf44hlcku.appsync-api.us-west-2.amazonaws.com/graphql",
  "region": "us-west-2",
  "authenticationType": "API_KEY",
  "apiKey": "da2-esr2gjlaqzcwvekzbehk67domi",
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
});

const TopLevelNavigator =  AppStackNavigator;
setUpLanguage();   // for I18n

export default class App extends React.Component {

  render() {
    return (
      <TopLevelNavigator 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
