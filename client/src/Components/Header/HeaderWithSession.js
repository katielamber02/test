import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Icon, Menu, Dropdown } from "semantic-ui-react";

const HeaderWithSession = () => (
  <>
    <Menu.Item className="headerwithsession-profile-icon" position="right" name="profile">
      <NavLink to="/profile">
        <Icon color="grey" name="user" size="large" />
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink to="/shopping/cart">
        <Icon color="grey" name="shopping cart" size="large" />
      </NavLink>
    </Menu.Item>
    <Dropdown
      direction="left"
      icon={<Icon color="grey" name="bars" size="large" />}
      simple
      item
    >
      <Dropdown.Menu>
        <Dropdown.Header icon="caret right" content="choose your selection" />
        <Dropdown.Divider />
        <Link to="/categories/mobile">
          <Dropdown.Item
            className="dropdown-item"
            icon="mobile"
            text="Mobile"
          />
        </Link>
        <Link to="/categories/computer">
          <Dropdown.Item
            className="dropdown-item"
            icon="computer"
            text="Computer"
          />
        </Link>
        <Link to="/categories/television">
          <Dropdown.Item
            className="dropdown-item"
            icon="television"
            text="Television"
          />
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  </>
);

export default HeaderWithSession;
