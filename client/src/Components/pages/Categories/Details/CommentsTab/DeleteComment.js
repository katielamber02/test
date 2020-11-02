import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { DELETE_COMMENT } from "../../../../../graphql/comment/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_PRODUCT } from "../../../../../graphql/mobile/queries";

const DeleteComment = ({ comment, productId }) => {
  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    variables: { comment_id: comment.id },
    refetchQueries: [{ query: GET_PRODUCT, variables: { id: productId } }]
  });

  return (
    <Button
      onClick={e => {
        e.preventDefault();
        deleteComment();
      }}
      loading={loading}
      color="red"
      inverted
    >
      <Icon name="trash" /> Delete My Comment
    </Button>
  );
};

export default DeleteComment;
