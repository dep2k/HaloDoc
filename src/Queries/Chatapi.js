//Create a new conversation


export const CreateConversation = `mutation CreateConversation( $user: User, 
    $doctor: Doctor, $questionsAndAnswers: Array, $pet: Pet ) {

        createConversation(

             input : {
       
                user: $user
                doctor: $doctor
                questionsAndAnswers: $questionsAndAnswers
                pet: $pet
            }
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
export const GetConversation = `query GetConversation($conversationId: String! ) {
getEvent(id: $id) {
    id
    name
    description
    comments(nextToken: $nextToken) {
        items {
            content
        }
    }
}
}`;
