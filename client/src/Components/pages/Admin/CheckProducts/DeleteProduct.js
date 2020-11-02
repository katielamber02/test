import React from "react";
import { Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_PRODUCT } from "../../../../graphql/mobile/mutation";
import { GET_PRODUCTS } from "../../../../graphql/mobile/queries";

const DeleteProduct = ({ id }) => {
  const [deleteProduct, { loading }] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
    variables: { id }
  });

  return (
    <Button
      onClick={() => deleteProduct()}
      disabled={loading}
      loading={loading}
      basic
      color="red"
      icon="trash"
      floated="right"
    />
  );
};

export default DeleteProduct;
