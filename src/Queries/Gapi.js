
export  const AllMessages = `query AllMessages {
        allMessages {
            conversationId
            createdAt
        }
}`;

export const GetPets = `query GetPets($userId: String! $nextToken: String) {
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
// User:
// Add user in the users table on Sign Up, pets
// Get Pets of a user
// Register a new Pet

// Vets:
// All doctors
// Register a new Vet

// Consulations:
// All Consultations

// Messages:
// All messages belonding to a conversation
