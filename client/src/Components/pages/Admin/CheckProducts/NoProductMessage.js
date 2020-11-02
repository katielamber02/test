import React from "react";
import { Message } from "semantic-ui-react";

const NoProductMessage = () => (
  <Message
    style={{ border: "1px solid black" }}
    icon="question"
    header="There is no product in your website!"
    content="If u want to add one, go to the add product page."
  />
);

export default NoProductMessage;
