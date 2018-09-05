
import React from 'react';
import { Provider } from "react-redux";
import AppStackNavigator from './src/Navigation/AppNavigator'
import store from './src/store'

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from "react-apollo";
import * as AWS from "aws-sdk";
import AppSync from "./AppSync.js";

// import AllPostsQuery from "./Queries/AllPostsQuery";
// import NewPostMutation from "./Queries/NewPostMutation";
// import DeletePostMutation from "./Queries/DeletePostMutation";
// import UpdatePostMutation from "./Queries/UpdatePostMutation";

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey,

    //type: AUTH_TYPE.AWS_IAM,
    //Note - Testing purposes only
    /*credentials: new AWS.Credentials({
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    })*/

    //IAM Cognito Identity using AWS Amplify
    //credentials: () => Auth.currentCredentials(),

    //Cognito User Pools using AWS Amplify
    // type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    // jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

export default class App extends React.Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <Rehydrated>
          <AppStackNavigator />
        </Rehydrated>
      </ApolloProvider>

    );
  }
}


