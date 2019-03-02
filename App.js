import React from "react";
import { Asset, AppLoading } from 'expo';

import AppStackNavigator from "./src/Navigation/AppNavigator";
//import HolaVet from './src/Navigation/AppNavigator'
import Amplify, { Auth } from "aws-amplify";
import NavigationService from "./src/NavigationService";
import { setUpLanguage } from "./Locale";

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: "us-west-2:b4a6ebbf-2360-4228-b730-774c255575f1",
    // REQUIRED - Amazon Cognito Region
    region: "us-west-2",
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: "us-west-2_sqQD8B5HZ",
    // OPTIONAL - Amazon Cognito Web Client ID
    userPoolWebClientId: "7lg83g328rjlcsqkdsopbjsjhf"
  },
  aws_appsync_graphqlEndpoint:
    "https://5c2vacmlljfhdebtdyf44hlcku.appsync-api.us-west-2.amazonaws.com/graphql",
  aws_appsync_region: "us-west-2",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  Storage: {
    bucket: "pets-holavet", //REQUIRED -  Amazon S3 bucket
    region: "us-west-2" //REQUIRED -  bucket region
  }
});

const TopLevelNavigator = AppStackNavigator;
//const App = createAppContainer(TopLevelNavigator);
setUpLanguage(); // for I18n

export default class App extends React.Component {
  state = {
    isReady: false,
  };
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <TopLevelNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
  async _cacheResourcesAsync() {
    const images = [
      require('./src/images/newBackground.png'),
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}
