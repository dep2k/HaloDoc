


export const CreateDoctor = `mutation CreateDoctor($name: String, $registrationNo: String, 
        $speciality: String, $profilePic: String, $placeOfResidence: String, $medicalCenter: String,
        $direction: String, $municipality: String, $isAvailable: String) {
    
         createDoctor(
  
          input : {
            name: $name, 
            registrationNo: $registrationNo,
            speciality: $speciality,
            profilePic: $profilePic,
            placeOfResidence: $placeOfResidence, 
            medicalCenter: $medicalCenter,
            direction: $direction,
            municipality: $municipality,
            isAvailable: $isAvailable
          }) {
            
            id
            name
            speciality
            profilePic
            registrationNo
            placeOfResidence
            medicalCenter
            direction
            municipality
            isAvailable
        }
    
      }`;



export const UpdateDoctorAvailability = `query UpdateDoctorAvailability($id: String, $name: String, $isAvailable: String) {
    updateDoctorAvailability(id: $id, isAvailable: $isAvailable) {
        id
        name
        isAvailable
    }
}`;

// All doctors

export const GetDoctors = `query GetDoctors($nextToken: String) {
    getDoctors(id: $id) {
        id
	    name
    	speciality
    	profilePic
	    registrationNo
    	placeOfResidence
	    medicalCenter
	    direction
        municipality
        isAvailable
    }
}`;


export const SubscribeToCreateDoctor = `subscription SubscribeToCreateDoctor {
    subscribeToCreateDoctor {
        id
	    name
    	speciality
    	profilePic
	    registrationNo
    	placeOfResidence
	    medicalCenter
	    direction
        municipality
        isAvailable
    }
  }`;
  

// Register a new Vet


