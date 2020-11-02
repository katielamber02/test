import { gql } from "apollo-boost";

export const ADD_PRODUCT_TO_CART = gql`
  mutation(
    $user_id: ID!
    $id: ID!
    $color: String!
    $img: String!
    $header: String!
    $meta: String!
    $price: Int!
  ) {
    addProductToCart(
      data: {
        user_id: $user_id
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

export const DELETE_PRODUCT_TO_CART = gql`
  mutation($user_id: ID!, $id: ID!) {
    deleteProductToCart(data: { user_id: $user_id, id: $id }) {
      id
    }
  }
`;
