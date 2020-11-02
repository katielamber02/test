import React, { useState } from "react";
import "./Register.css";
import { useMutation } from "@apollo/react-hooks";
import { REGISTER } from "../../../graphql/user/mutations";
import { withRouter } from "react-router-dom";
import OtherAuth from "../../hocs/OtherAuth";
import Error from "../../Error/Error";
import {
  Card,
  Container,
  Button,
  Form,
  Divider,
  Icon,
  Input
} from "semantic-ui-react";

const Register = ({ refetch, history }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [register, { error, loading }] = useMutation(REGISTER);

  const errorMessage = error ? error.message.split(":")[1] : null;

  const onRegister = e => {
    e.preventDefault();
    register({
      variables: { name, surname, username, email, password }
    }).then(async ({ data }) => {
      const token = data.register.token;
      localStorage.setItem("token", token);
      history.push("/");
      await refetch();
    });
    resetInputValues();
  };

  const resetInputValues = () => {
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const formValidate = !name && !surname && !username && !email && !password;

  const inputAction = {
    icon: (
      <Icon
        name={isVisible === true ? "eye" : "eye slash"}
        onClick={() => setIsVisible(!isVisible)}
      />
    )
  };

  return (
    <Container className="register-container">
      <Card className="register-card-border-dark" fluid centered>
        <Card.Content>
          <Card.Header textAlign="center">REGISTER</Card.Header>
          <Divider className="register-divider" />
          <Form>
            <Form.Field error={error}>
              <label>First Name</label>
              <input
                onChange={e => setName(e.target.value)}
                placeholder="First Name"
              />
            </Form.Field>
            <Form.Field error={error}>
              <label>Last Name</label>
              <input
                onChange={e => setSurname(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Field>
            <Form.Field error={error}>
              <label>Username</label>
              <input
                onChange={e => setUsername(e.target.value)}
                placeholder="Username"
              />
            </Form.Field>
            <Form.Field error={error}>
              <label>Email</label>
              <input
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Field>
            <Form.Field error={error}>
              <label>Password</label>
              <Input
                action={inputAction}
                type={isVisible === true ? "text" : "password"}
                onChange={e => setPassword(e.target.value)}
                placeholder="password"
              />
            </Form.Field>
            <Button
              loading={loading}
              disabled={formValidate}
              color="blue"
              animated="fade"
              onClick={e => onRegister(e)}
            >
              <Button.Content visible>Register</Button.Content>
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
  withRouter(Register)
);
