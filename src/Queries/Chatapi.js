
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
