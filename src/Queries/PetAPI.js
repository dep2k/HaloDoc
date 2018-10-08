

export const GetPets = `query GetPets($username: String!) {
    getPets(username: $username) {
      items {
        category
        name
        race
        sex
        age
        origin
        use
        background
        weight
        vaccinations {
          name
          date
        }
      }
        
    }
}`;

export const CreatePet = `mutation CreatePet($username: String!,  String, $name: String, $type: String, $petImage: String) {
    createPet(username: $username, name: $name, type:  $type, petImage: $petImage) {
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

  