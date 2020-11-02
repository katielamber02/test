import { gql } from "apollo-boost";

export const ADD_PRODUCT = gql`
  mutation(
    $color: String!
    $img: String!
    $header: String!
    $meta: String!
    $price: Int!
  ) {
    newProduct(
      data: {
        color: $color
        img: $img
        header: $header
        meta: $meta
        price: $price
      }
    ) {
      color
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation($id: ID!) {
    deleteProduct(data: { id: $id }) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation(
    $id: ID!
    $color: String!
    $img: String!
    $header: String!
    $meta: String!
    $price: Int!
  ) {
    updateProduct(
      data: {
        id: $id
        color: $color
        img: $img
        header: $header
        meta: $meta
        price: $price
      }
    ) {
      id
    }
  }
`;
