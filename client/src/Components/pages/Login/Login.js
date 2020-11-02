import React, { useState } from "react";
import { LOGIN } from "../../../graphql/user/mutations";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
import OtherAuth from "../../hocs/OtherAuth";
import Error from "../../Error/Error";
import "./Login.css";
import {
  Card,
  Container,
  Button,
  Form,
  Divider,
  Icon
} from "semantic-ui-react";

const Login = ({ refetch, history }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [login, { error, loading }] = useMutation(LOGIN);

  const errorMessage = error ? error.message.split(":")[1] : null;

  const onSubmit = e => {
    e.preventDefault();
    login({
      variables: { username: usernameInput, password: passwordInput }
    }).then(async ({ data }) => {
      const token = data.login.token;
      localStorage.setItem("token", token);
      history.push("/");
      await refetch();
    });
    resetInputValues();
  };

  const resetInputValues = () => {
    setUsernameInput("");
    setPasswordInput("");
  };

  const formValidate = () => !usernameInput || !passwordInput;

  return (
    <Container className="login-container">
      <Card className="login-card-border-dark" fluid centered>
        <Card.Content>
          <Card.Header textAlign="center">LOGIN</Card.Header>
          <Divider className="login-divider" />
          <Form onSubmit={e => onSubmit(e)}>
            <Form.Field error={error && true}>
              <label>Username</label>
              <input
                value={usernameInput}
                onChange={e => setUsernameInput(e.target.value)}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field error={error && true}>
              <label>Password</label>
              <input
                type="password"
                value={passwordInput}
                onChange={e => setPasswordInput(e.target.value)}
                placeholder="Password"
              />
            </Form.Field>
            <Button
              loading={loading}
              disabled={loading || formValidate()}
              color="blue"
              type="submit"
              animated="fade"
            >
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <Error error={errorMessage} />
          </Form>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default OtherAuth(session => session && session.activeUser)(
  withRouter(Login)
);
