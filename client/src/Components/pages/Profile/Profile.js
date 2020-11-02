import React from "react";
import Auth from "../../hocs/Auth";
import { Item, Container, Segment } from "semantic-ui-react";
import UpdateProfile from "./UpdateProfile";
import ProfileItem from "./ProfileItem";

const Profile = ({ session: { activeUser } }) => (
  <Segment padded="very" basic>
    <Container>
      <Item.Group divided>
        <ProfileItem activeUser={activeUser} />
        <UpdateProfile activeUser={activeUser} />
      </Item.Group>
    </Container>
  </Segment>
);

export default Auth(session => session && session.activeUser)(Profile);
