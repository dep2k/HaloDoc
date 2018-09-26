


   export const CreateDoctor = `mutation CreateDoctor($name: String, $regNo: String, 
        $speciality: String, $profilePic: String, $placeOfResidence: String, $medicalCenter: String,
        $direction: String, $municipality: String) {
    
         createDoctor(
  
          input : {
            name: $name, 
            registrationNo: $regNo,
            speciality: $speciality,
            profilePic: $profilePic,
            placeOfResidence: $placeOfResidence, 
            medicalCenter: $medicalCenter,
            direction: $direction,
            municipality: $municipality
          }) {
            
            name
            speciality
            profilePic
            registrationNo
            placeOfResidence
            medicalCenter
            direction
            municipality
        }
    
      }`;


export const GetPets = `query GetPets($userId: String! $nextToken: String) {
    getPets {
        petId
        petName
        petDescription
        PetImage
        
    }
}`;

export const addPet = `mutation addPet($name: String!, $regNo: String!, $where: String!, $description: String!) {
    addPet(name: $name, when: $when, where: $where, description: $description) {
      id
      name
      where
      when
      description
    }
  }`;

// User:
// Add user in the users table on Sign Up, pets
// Get Pets of a user
// Register a new Pet

// Vets:
// All doctors

export const GetDoctors = `query GetDoctors($nextToken: String) {
    getDoctors(id: $id) {
        id
        name
        regNo
        speciality
        image
        
    }
}`;

// Register a new Vet


