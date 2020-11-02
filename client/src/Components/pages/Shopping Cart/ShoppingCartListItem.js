import React from "react";
import { List, Image, Divider } from "semantic-ui-react";
import DeleteProductButton from "./DeleteProductButton";

const ShoppingCartListItem = ({ activeUser, item }) => (
  <>
    <List.Item>
      <Image size="small" src={item.img} />
      <List.Content>
        <List.Header>{item.header}</List.Header>
        <List.Description>{item.meta}</List.Description>
        <List.Description as="b">{item.price}$</List.Description>
      </List.Content>
      <List.Content floated="right">
        <DeleteProductButton user_id={activeUser.id} id={item.id} />
      </List.Content>
    </List.Item>
    <Divider />
  </>
);

export default ShoppingCartListItem;
