import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import HeaderWithSession from "./HeaderWithSession";
import HeaderWithNoSession from "./HeaderWithNoSession";
import "./Header.css";

const Header = ({ session }) => {
  return (
    <Menu className="navbar" color="teal" size="large" borderless>
      <Menu.Item header>
        <i className="material-icons">add_shopping_cart</i> &nbsp;
        <NavLink to="/" className="nav-link-header">
          Beko Commerce
        </NavLink>
      </Menu.Item>
      {console.log(session)}
      {session ? <HeaderWithSession /> : <HeaderWithNoSession />}
    </Menu>
  );
};
export default Header;
