const awsConfig = {
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
    API: {
      "graphqlEndpoint": "https://5c2vacmlljfhdebtdyf44hlcku.appsync-api.us-west-2.amazonaws.com/graphql",
      "region": "us-west-2",
      "authenticationType": "AMAZON_COGNITO_USER_POOLS",
    }
  }
  
  export default awsConfig;