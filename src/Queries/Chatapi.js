//Create a new conversation
import Amplify, { API, graphqlOperation } from "aws-amplify";

export const CreateMessage = `mutation CreateMessage($_id: String, $text: String, $conversationId: ID!, $user: UserInput) {
  createMessage(input: 
    {
      text: $text, 
      conversationId: $conversationId,
      messageId: $_id,
      user: $user
    })
  {
    text
    messageId
    conversationId
    createdAt
    user {
      username
      fullName
    }
  }
}`
export const CreateConversation = `mutation CreateConversation(  
    $user: UserInput,
    $doctor: DoctorInput,
    $questionsAndAnswers: [ConversationQAInput],
    $pet: UpdatePetInput) {

        createConversation(

             input : {
       
                user: $user,
                doctor: $doctor,
                pet: $pet,
                questionsAndAnswers: $questionsAndAnswers

            }) {
                username
                createdAt
                payment
                user {
                  fullName
                  type
                }
                pet {
                  category
                  name
                  race
                  gender
                  age
                  origin
                  use
                  background
                  weight
                }
                  doctor {
                  name
                  speciality
                  doctorId
                }
                doctorId
        }

  }`;



// Get All convesations
export  const AllConversations = `query AllConversation($nextToken: String) {
    allConversations {
        conversationId
        userId
        vetId
        conversationStatus
        payment
        createdAt
    }
}`;


export  const AllMessages = `query AllMessages($nextToken: String) {
    allMessages {
        conversationId
        senderId
        createdAt
        messageText
        messageType
       
    }
}`;


export const GetDoctorConversations = `query GetDoctorConversations($username: String!, $conversationStatus: String! ) {
getDoctorConversations(username: $username ,conversationStatus: $conversationStatus ) {
      items {
           username
           conversationStatus
           createdAt
           payment
           doctor {
               name
           }
           pet {
             name
             race
             origin
             age
             gender
             username
             category
           }
           questionsAndAnswers {
            question
            answer
          }
        
        }
    }
}`;
export const GetUserConversations = `query GetUserConversations($username: String!, $conversationStatus: String! ) {
getUserConversations(username: $username ,conversationStatus: $conversationStatus ) {
     items {
           username
           conversationStatus
           createdAt
           payment
           doctor {
               name
           }
           pet {
             name
             race
             origin
             age
             gender
             username
           }
        
        }
    }
}`;

export const GetMessages = `query GetMessages($conversationId : String!) {
  getMessages (conversationId: $conversationId ){
    items {
      conversationId
      createdAt
      messageId
      text
      user {
        
        username
      }

    }
  }
}`; 

export const ListConversations = `query ListConversations {
  listConversations {
    items {
      username
      payment
      createdAt
      doctor{
        name
      }
    }
    nextToken
  }
}`;

export const SubscriptionToCreateConversation = `subscription SubscribeToCreateConversation($doctorId: String) {
  subscribeToCreateConversation(doctorId: $doctorId) {
    username
    createdAt
  }}`;

  // export const SubscriptionToCreateConversation = `subscription SubscribeToCreateConversation($doctorId: String) {
  //   subscribeToCreateConversation(doctorId: $doctorId) {
  //     username
  //     createdAt
  //     user {
  //       fullName
  //       type
  //     }
  //   }}`;
  
export const SubscriptionToNewMessage = `subscription SubscribeToNewMessage($conversationId:ID!) {
  subscribeToNewMessage(conversationId: $conversationId) {
    text
    messageId
    conversationId
    createdAt
    user {
      username
      fullName
    }
  }
}`;

export const ConfirmPayment = `mutation ConfirmPayment($username: String,$createdAt: String,$payment: String) {
      confirmPayment(
            username: $username,
            createdAt: $createdAt,
            payment: $payment,
         ) {
              username
              createdAt
              user {
                fullName
                type
              }
              pet {
                category
                name
                race
                gender
                age
                origin
                use
                background
                weight
              }
                doctor {
                name
                speciality
                doctorId
              }
              doctorId
      }

}`;


export const EndConversation = `mutation EndConversation($username: String,$createdAt: String,$conversationStatus: String) {
  endConversation(
        username: $username,
        createdAt: $createdAt,
        conversationStatus: $conversationStatus,
      ){
          username
          createdAt
          user {
            fullName
            type
          }
          pet {
            category
            name
            race
            gender
            age
            origin
            use
            background
            weight
          }
            doctor {
            name
            speciality
            doctorId
          }
          doctorId
  }
}`;