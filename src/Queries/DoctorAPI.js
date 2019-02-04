
export const CreateDoctor = `mutation CreateDoctor($doctorId: String,$name: String, $speciality: String, 
        $profilePic: String, $registrationId: String, $phoneNo: String, $email: String,
        $homeTown: String, $medicalCenter: String, $department: String, $address: String, $s3Object: S3ObjectInput ) {
    
         createDoctor(
  
          input : {
            doctorId: $doctorId,
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
            s3Object: $s3Object,
            

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
            s3Object {
                bucket
                key
            }
        }
    
      }`;



export const UpdateDoctorAvailability = `mutation UpdateDoctorAvailability($doctorId: ID!,  $isAvailable: String) {
    updateDoctor(
        input: {
            doctorId: $doctorId,
            isAvailable: $isAvailable 
        }){
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
            s3Object {
                key
                bucket
            }
        }
        nextToken
    }
}`;

export const GetDoctorAvailability = `query GetDoctorAvailability($doctorId: String) {
    getDoctor(doctorId: $doctorId) {
        isAvailable
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
            s3Object {
                key
                bucket
            }
            
        }
        nextToken
    }
}`;
// Register a new Vet


