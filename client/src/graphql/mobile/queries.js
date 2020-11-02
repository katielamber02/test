import { gql } from "apollo-boost";

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      color
      img
      header
      meta
      price
    }
  }
`;

export const GET_PRODUCT = gql`
  query($id: ID!) {
    product(id: $id) {
      id
      color
      img
      header
      meta
      price
      comments {
        id
        user_id
        product_id
        comment
        createdAt
        user {
          id
          name
          surname
        }
      }
    }
  }
`;
