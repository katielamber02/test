import React, { useState } from "react";
import { Item, Icon, Button, Input, Message } from "semantic-ui-react";
import { UPDATE } from "../../../graphql/user/mutations";
import { useMutation } from "@apollo/react-hooks";
import { GET_ACTIVE_USER } from "../../../graphql/user/queries";
import Error from "../../Error/Error";

const UpdateProfile = ({ activeUser }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputAction = {
    icon: (
      <Icon
        name={isVisible === true ? "eye" : "eye slash"}
        onClick={() => setIsVisible(!isVisible)}
      />
    )
  };

  const [update, { error, loading }] = useMutation(UPDATE, {
    refetchQueries: [{ query: GET_ACTIVE_USER }]
  });

  const updateUser = e => {
    e.preventDefault();
    update({
      variables: { id: activeUser.id, name, surname, username, email, password }
    })
      .then(() => resetInputValues())
      .then(() => localStorage.removeItem("token"))
      .then(() => window.location.reload());
  };

  const resetInputValues = () => {
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const formValidate = !name && !surname && !username && !email && !password;

  const errorMessage = error ? error.message.split(":")[1] : null;

  console.log(activeUser);
  return (
    <Item>
      <Item.Image>
        <Icon size="massive" name="edit outline" />
      </Item.Image>
      <Item.Content>
        <Item.Header>Update Your Profile</Item.Header>
        <Item.Description>
          <Input
            onChange={e => setName(e.target.value)}
            placeholder="name"
            style={{ marginTop: "5px" }}
            fluid
          />
          <Input
            onChange={e => setSurname(e.target.value)}
            placeholder="surname"
            style={{ marginTop: "5px" }}
            fluid
          />
          <Input
            onChange={e => setUsername(e.target.value)}
            placeholder="username"
            style={{ marginTop: "5px" }}
            fluid
          />
          <Input
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            style={{ marginTop: "5px" }}
            fluid
          />
          <Input
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            action={inputAction}
            type={isVisible === true ? "text" : "password"}
            style={{ marginTop: "5px" }}
            fluid
          />
        </Item.Description>
        {error ? (
          <Error error={errorMessage} />
        ) : (
          <Message
            content="you must login again after the update"
            color="red"
          />
        )}
        <Item.Extra>
          <Button
            onClick={e => updateUser(e)}
            color="teal"
            animated="fade"
            loading={loading}
            disabled={formValidate}
          >
            <Button.Content visible>Update</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default UpdateProfile;
