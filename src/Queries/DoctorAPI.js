
export const CreateDoctor = `mutation CreateDoctor($name: String, $speciality: String, 
        $profilePic: String, $registrationId: String, $phoneNo: String, $email: String,
        $homeTown: String, $medicalCenter: String, $department: String, $address: String ) {
    
         createDoctor(
  
          input : {
            name: $name, 
            speciality: $speciality,
            profilePic: $profilePic,
            registrationId: $registrationId, 
            phoneNo: $phoneNo,
            email: $email,
            homeTown: $homeTown,
            medicalCenter: $medicalCenter,
            department: $department,
            address: $address,
            

          }) {
            
            name
            speciality
            profilePic
            registrationId
            phoneNo
            email
            homeTown
            medicalCenter
            department
            address
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

export const ListDoctors = `query ListDoctors($nextToken: String) {
    listDoctors(limit: 20, nextToken: $nextToken) {
        items {
            id
            name
        }
        nextToken
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


