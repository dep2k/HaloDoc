

// create a new admin

 export const CreateAdmin = `mutation CreateDoctor($name: String, $regNo: String, 
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


//  Get List of all the admins/receptions

export const GetAdmins = `query GetDoctors($nextToken: String) {
getDoctors(id: $id) {
    id
    name
    regNo
    speciality
    image
    
}
}`;

// Get the Admin/Receptionish who is currently available
export const GetAvailableAdmin = `query GetDoctors($nextToken: String) {
    getDoctors(id: $id) {
        id
        name
        regNo
        speciality
        image
        
    }
    }`;

// Register a new Vet


