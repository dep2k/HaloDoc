/*

subscription SubscribeToCreateDoctor {
  subscribeToCreateDoctor {
    id
    name
  }
}

mutation CreateDoctor {
  createDoctor(input: {name: "Sanju", registrationNo: "Deep", speciality: "Deep", profilePic: "Deep", placeOfResidence: "Deep", medicalCenter: "Deep", direction: "Deep", municipality: "Deep", isAvailable: false}) {
    id
    name
    isAvailable
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



























*/