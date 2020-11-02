import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation(
    $name: String!
    $surname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    register(
      data: {
        name: $name
        surname: $surname
        username: $username
        email: $email
        password: $password
      }
    ) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation($username: String!, $password: String!) {
    login(data: { username: $username, password: $password }) {
      token
    }
  }
`;

export const UPDATE = gql`
  mutation(
    $id: ID!
    $name: String!
    $surname: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    update(
      data: {
        id: $id
        name: $name
        surname: $surname
        username: $username
        email: $email
        password: $password
      }
    ) {
      id
    }
  }
`;
