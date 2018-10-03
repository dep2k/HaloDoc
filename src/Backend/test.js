/*

subscription SubscribeToCreateDoctor {
  subscribeToCreateDoctor {
    id
    name
  }
}

subscription SubscribeToCreateConversation{
  subscribeToCreateConversation {
    username
    createdAt
    user {
      fullName
      type
    }
  }
}
mutation CreateConversation{
  createConversation(input: 
    {
      user: {
        username: "3482340923849023",
        userType: "Patient",
        fullName: "Deep A"
      },
			questionsAndAnsers: [
        {
          question: "Question 1",
          answer: "Answer 1"
        },
        {
          question: "Question 2",
          answer: "Answer 2"
        }
      ],
      pet: {
        username: "deep39303903",
			  petId: "238280340932",
	      category: "Canine"
      }
			
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
  }
}

mutation CreateDoctor {
  createDoctor(input: {name: "Sanju", registrationNo: "Deep", speciality: "Deep", profilePic: "Deep", placeOfResidence: "Deep", medicalCenter: "Deep", direction: "Deep", municipality: "Deep"}) {
    id

  }
}

mutation CreatePet {
  createPet(input: {username: "deep", category: "canine", name: "bruno", race: "american", sex: "m", age: "1", origin: "china", use: "Some description about the pet", background: "Some BG INfo", weight: "5 Kig"}) {
    petId
    username
  }
}

mutation UpdateHelper {
  updateHelper(input: {id: "2e4b9aca-25cc-4d14-b15c-afd123703bf7", name: "deep", isAvailable: false}) {
    id
    name
    isAvailable
  }
}

mutation CreateHelper {
  createHelper(input: {name: "fdfads", phoneNo: "afdfad", email: "Adfad", address: "Afdads", password: "Fadfa", isAvailable: true}) {
    id
    name
    isAvailable
  }
}

query ListDoctors {
  listDoctors(limit: 2, nextToken: null) {
    items {
      id
      name
    }
    nextToken
  }
}

query ListHelpers {
  listHelpers(filter: {isAvailable: {eq: true}}, limit: 2, nextToken: null) {
    items {
      id
      name
      isAvailable
    }
    nextToken
  }
}

query getUserPets {
  getPets(username: "deep") {
		pets {
        petId
    }

  }
}

query getConversations {
  
   getConversations(username: "3482340923849023") {
		items {
        username
    }

  }
}














*/