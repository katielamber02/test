import React from "react";
import { Message } from "semantic-ui-react";

const NoProductMessage = () => (
  <Message
    style={{ border: "1px solid black" }}
    icon="question"
    header="There is no mobile phone in our website!"
    content="Let's look the another products!"
  />
);

export default NoProductMessage;
