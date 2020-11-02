import React from "react";
import Moment from "react-moment";
import Logout from "./Logout";
import { Item, Icon } from "semantic-ui-react";

export const ProfileItem = ({ activeUser }) => (
  <Item>
    <Item.Image>
      <Icon size="massive" name="user" />
    </Item.Image>
    <Item.Content>
      <Item.Header>
        {activeUser.name} {activeUser.surname}
      </Item.Header>
      <Item.Meta>
        <span>@{activeUser.username}</span>
      </Item.Meta>
      <Item.Description>
        <b>Your Email : </b> &nbsp;
        <span>{activeUser.email}</span>
      </Item.Description>
      <Item.Description>
        <b>Your Name : </b> &nbsp;
        <span>{activeUser.name}</span>
      </Item.Description>
      <Item.Description>
        <b>Your Surname : </b> &nbsp;
        <span>{activeUser.surname}</span>
      </Item.Description>
      <Item.Description>
        <b>Your Account CreatedAt : </b> &nbsp;
        <Moment fromNow date={activeUser.createdAt} />
      </Item.Description>
      <Item.Extra>
        <Logout />
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default ProfileItem;
