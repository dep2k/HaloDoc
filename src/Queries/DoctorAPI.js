


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


export const SubscribeToCreateDoctor = `subscription SubscribeToCreateDocotr() {
    subscribeToCreateDoctor() {
        id
        name
        regNo
        speciality
    }
  }`;
  

// Register a new Vet


