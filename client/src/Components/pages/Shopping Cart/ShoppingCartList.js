import React from "react";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { List, Message } from "semantic-ui-react";

const totalPrice = cart => {
  let totalPrice = 0;
  cart.forEach(item => {
    totalPrice += item.price;
  });

  return totalPrice;
};

const ShoppingCartList = ({ activeUser, cart }) => (
  <List animated relaxed selection verticalAlign="middle">
    {cart.map(item => (
      <ShoppingCartListItem activeUser={activeUser} item={item} key={item.id} />
    ))}
    {cart.length !== 0 && (
      <Message
        color="red"
        style={{ marginBottom: "50px" }}
        as="h4"
        floated="right"
      >
        Total Price: &nbsp; {totalPrice(cart)} $
      </Message>
    )}
  </List>
);

export default ShoppingCartList;
