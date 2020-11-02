import React from "react";
import { DELETE_PRODUCT_TO_CART } from "../../../graphql/cart/mutations";
import { GET_ACTIVE_USER } from "../../../graphql/user/queries";
import { useMutation } from "@apollo/react-hooks";
import { Button } from "semantic-ui-react";

const DeleteProductButton = ({ user_id, id }) => {
  const [deleteProductToCart, { loading, error }] = useMutation(
    DELETE_PRODUCT_TO_CART,
    {
      variables: { user_id, id },
      refetchQueries: [{ query: GET_ACTIVE_USER }]
    }
  );

  if (error) return <div>error</div>;

  return (
    <Button
      floated="right"
      loading={loading}
      disabled={loading}
      onClick={() => deleteProductToCart().then()}
    >
      X
    </Button>
  );
};

export default DeleteProductButton;
