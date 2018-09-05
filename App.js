
import React from 'react';
import { Provider } from "react-redux";
import AppStackNavigator from './src/Navigation/AppNavigator'
import store from './src/store'

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from "react-apollo";
import * as AWS from "aws-sdk";

// const client = new AWSAppSyncClient({
//   url: awsconfig.graphqlEndpoint,
//   region: awsconfig.region,
//   auth: { type: AUTH_TYPE.API_KEY, apiKey: awsconfig.apiKey }
// });


//import AppSync from "./AppSync.js";
// import AllPostsQuery from "./Queries/AllPostsQuery";
// import NewPostMutation from "./Queries/NewPostMutation";
// import DeletePostMutation from "./Queries/DeletePostMutation";
// import UpdatePostMutation from "./Queries/UpdatePostMutation";

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
     
   
  }
}


