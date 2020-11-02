import { gql } from "apollo-boost";

export const GET_ACTIVE_USER = gql`
  query {
    activeUser {
      id
      name
      surname
      username
      email
      createdAt
      admin
      cart {
        user_id
        cart {
          id
          color
          img
          header
          meta
          price
        }
      }
    }
  }
`;
