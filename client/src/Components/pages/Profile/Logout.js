import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

const onClick = (client, history) => {
  localStorage.setItem("token", "");
  client.resetStore();
  history.push("/");
  window.location.reload();
};

const Logout = ({ history }) => (
  <ApolloConsumer>
    {client => (
      <Button
        animated="fade"
        color="teal"
        onClick={() => onClick(client, history)}
      >
        <Button.Content visible>Logout</Button.Content>
        <Button.Content hidden>
          <Icon name="arrow right" />
        </Button.Content>
      </Button>
    )}
  </ApolloConsumer>
);

export default withRouter(Logout);
