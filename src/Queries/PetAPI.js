
export const GetPets = `query GetPets($userId: String! $nextToken: String) {
    getPets {
        petId
        petName
        petDescription
        PetImage
        
    }
}`;

export const CreatePet = `mutation CreatePet($name: String!, $regNo: String!, $where: String!, $description: String!) {
    createPet(name: $name, when: $when, where: $where, description: $description) {
      id
      name
      where
      when
      description
    }
  }`;

  export const UpdatePet  = `mutation UpdatePet($name: String!, $regNo: String!, $where: String!, $description: String!) {
    createPet(name: $name, when: $when, where: $where, description: $description) {
      id
      name
      where
      when
      description
    }
  }`;