
import React from 'react';
//import { Provider } from "react-redux";
import AppStackNavigator from './src/Navigation/AppNavigator'
//import store from './src/store'
import Amplify, { Auth } from 'aws-amplify';
import NavigationService from './src/NavigationService';


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
      userPoolId: 'us-west-2_jtrBQQgdp',
      // OPTIONAL - Amazon Cognito Web Client ID
      userPoolWebClientId: '1co0k4249dv2f3mhmsvt1rjr2u', 
  },
});

const TopLevelNavigator =  AppStackNavigator;


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
