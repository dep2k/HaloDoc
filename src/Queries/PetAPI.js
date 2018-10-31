

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
export const CreatePet = `mutation CreatePet($username: String!, $category:String, $name: String, $race: String, $petImage: String, $color: String
                $gender: String, $age:String, $origin: String, $product: String, $date: String, $feeding: String, 
                $use: String, $background: String, $weight: String, $vaccinations: [VaccinationInput]
                 ) {
    createPet(username: $username, name: $name, category:  $category, petImage: $petImage) {
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

  