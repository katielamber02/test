import React from "react";
import Auth from "../../hocs/Auth";
import { Header, Container, Divider } from "semantic-ui-react";
import ShoppingCartList from "./ShoppingCartList";
import NoProductMessage from "./NoProductMessage";

const ShoppingCart = ({ session }) => (
  <>
    <Header as="h2" textAlign="center">
      YOUR CART ({session.activeUser.cart.cart.length} items)
    </Header>
    <Container>
      <Divider />
      {session.activeUser.cart.cart.length === 0 && <NoProductMessage />}
      <ShoppingCartList
        activeUser={session.activeUser}
        cart={session.activeUser.cart.cart}
      />
    </Container>
  </>
);

export default Auth(session => session && session.activeUser)(ShoppingCart);
