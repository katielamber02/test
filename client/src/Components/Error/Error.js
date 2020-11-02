import React from "react";
import { Message } from "semantic-ui-react";

const Error = ({ error }) => (
  <>
    {error !== null && (
      <Message negative>
        <Message.Header>Opps! There is an error here.</Message.Header>
        <p>{error}</p>
      </Message>
    )}
  </>
);

export default Error;
