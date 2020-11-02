import React from "react";
import { Message } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const NoProductMessage = () => (
  <Message
    style={{ border: "1px solid black" }}
    icon="question"
    header="There is no product in your card!"
    content={
      <>
        <p>Let's add some!</p>
        <NavLink to="/categories/mobile">Mobile</NavLink> &nbsp;
        <NavLink to="/categories/computer">Computer</NavLink> &nbsp;
        <NavLink to="/categories/television">Television</NavLink>
      </>
    }
  />
);

export default NoProductMessage;
