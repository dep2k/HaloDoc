


// May be it will be done in cognito or a separate user table will be required
  export const UpdateUser  = `mutation UpdateUser($name: String!, $regNo: String!, $where: String!, $description: String!) {
    createPet(name: $name, when: $when, where: $where, description: $description) {
      id
      name
      where
      when
      description
    }
  }`;
export const GetUserConversations = `query GetUserConversations($username: String!, $conversationStatus: String! ) {
getUserConversations(username: $username ,conversationStatus: $conversationStatus ) {
     items {
         conversationStatus
         username
         status
         createdAt
         payment
         doctor {
           name
         }
        }
    }
}`;
