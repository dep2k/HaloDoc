//Create a new conversation
import Amplify, { API, graphqlOperation } from "aws-amplify";


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
                user {
                  fullName
                  type
                }
                pet {
                  category
                  name
                  race
                  sex
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
        status
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

// Get Detail of a single conversation
export const GetConversation = `query GetConversation($username: String! ) {
getConversations(username: $username) {
     items {
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


export const SubscriptionToCreateConversation = `subscription SubscribeToCreateConversation($doctorId: String) {
  subscribeToCreateConversation(doctorId: $doctorId) {
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
      sex
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
  }}`;