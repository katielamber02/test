import React from "react";
import { Button } from "semantic-ui-react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_PRODUCT_TO_CART } from "../../../../graphql/cart/mutations";
import { GET_ACTIVE_USER } from "../../../../graphql/user/queries";

const AddCartButton = ({
  user_id,
  id,
  color,
  img,
  header,
  meta,
  price,
  activeUser
}) => {
  const addProductToCartProcess = (e, addProductToCart) => {
    e.preventDefault();
    addProductToCart();
  };

  const isItemAlreadyInCart = () => {
    const item = activeUser.cart.cart.find(item => item.id === id);
    return item ? true : false;
  };

  const [addProductToCart, { loading, error }] = useMutation(
    ADD_PRODUCT_TO_CART,
    {
      variables: { user_id, id, color, img, header, meta, price },
      refetchQueries: [{ query: GET_ACTIVE_USER }]
    }
  );

  if (error) return <div>error</div>;

  return (
    <Button
      onClick={e => addProductToCartProcess(e, addProductToCart)}
      loading={loading}
      disabled={loading || isItemAlreadyInCart()}
      fluid
    >
      {isItemAlreadyInCart() ? "Already In Cart" : "Add Cart"}
    </Button>
  );
};

export default AddCartButton;
