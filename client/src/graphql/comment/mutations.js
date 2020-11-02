import { gql } from "apollo-boost";

export const ADD_COMMENT = gql`
  mutation($user_id: ID!, $product_id: ID!, $comment: String!) {
    addComment(
      data: { user_id: $user_id, product_id: $product_id, comment: $comment }
    ) {
      id
      user_id
      product_id
      comment
      createdAt
      user {
        name
        surname
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation($comment_id: ID!, $newComment: String!) {
    updateComment(data: { comment_id: $comment_id, newComment: $newComment }) {
      comment
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation($comment_id: ID!) {
    deleteComment(data: { comment_id: $comment_id }) {
      comment
    }
  }
`;
