import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const HeaderWithSession = () => (
  <>
    <Menu.Item position="right" name="login">
      <NavLink to="/login" className="nav-link">
        Login
      </NavLink>
    </Menu.Item>
    <Menu.Item name="register">
      <NavLink to="/register" className="nav-link">
        Register
      </NavLink>
    </Menu.Item>
  </>
);

export default HeaderWithSession;
