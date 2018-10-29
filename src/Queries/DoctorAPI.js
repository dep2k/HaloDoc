
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
            
            doctorId
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
    updateDoctorAvailability(doctorId: $id, isAvailable: $isAvailable) {
        doctorId
        name
        isAvailable
    }
}`;

// All doctors


export const SubscribeToCreateDoctor = `subscription SubscribeToCreateDoctor {
    subscribeToCreateDoctor {
        doctorId
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
  

  export const ListDoctors = `query ListDoctors($nextToken: String) {
    listDoctors(limit: 20, nextToken: $nextToken) {
        items {
            doctorId
            name
            speciality
            registrationId
            phoneNo
            email
            homeTown
            medicalCenter
            department
            address
        }
        nextToken
    }
}`;



export const ListAvailableDoctors = `query ListAvailableDoctors($speciality: String) {
    listAvailableDoctors(speciality: $speciality, limit: 20, nextToken: "null") {
        items {
            doctorId
            name
            speciality
            registrationId
            phoneNo
            email
            homeTown
            medicalCenter
            department
            address
        }
        nextToken
    }
}`;
// Register a new Vet


