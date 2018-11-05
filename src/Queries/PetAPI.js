

export const GetPets = `query GetPets($username: String!) {
    getPets(username: $username) {
      items {
        category
        name
        race
        gender
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
// export const CreatePet = `mutation CreatePet($username: String!, $category:String, $name: String, $race: String, $petImage: String, $color: String
//                 $gender: String, $age:String, $origin: String, $product: String, $date: String, $feeding: String, 
//                 $use: String, $background: String, $weight: String, $vaccinations: [VaccinationInput]
//                  ) {
//     createPet(
  
//           input : {
//             username: $username,
//             category: $category,
//             name: $name, 
//             race: $race,
//             petImage: $petImage,
//             color: $color,
//             gender: $gender,
//             age: $age,
//             origin: $origin,
//             product: $product,
//             date: $date,
//             feeding: $feeding,
//             use: $use,
//             background: $background,
//             weight: $weight,
//             vaccinations: $vaccinations
//           })  {
//          username
//          name
//          category
//          petImage

//     }
//   }`;
export const CreatePet = `mutation CreatePet($username: String!, $category:String, $name: String, $race: String,
                $gender: String, $age:String, $origin: String, $use: String, $background: String, $weight: String, $vaccinations: [VaccinationInput],
                $petImage: String, $color: String, $product: String, $date: String, $feeding: String
                 ) {
    createPet(
  
          input : {
            username: $username,
            category: $category,
            name: $name, 
            race: $race,
            gender: $gender,
            age: $age,
            origin: $origin,
            use: $use,
            background: $background,
            weight: $weight,
            vaccinations: $vaccinations
            petImage :$petImage
            color: $color
            product: $product
            date: $date
            feeding: $feeding
          })  {
         username
         name
         
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

  