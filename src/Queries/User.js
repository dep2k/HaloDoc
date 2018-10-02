


// May be it will be done in cognito or a separate user table will be required
  export const UpdateUser  = `mutation UpdateUser($name: String!, $regNo: String!, $where: String!, $description: String!) {
    createPet(name: $name, when: $when, where: $where, description: $description) {
      id
      name
      where
      when
      description
    }
  }`;