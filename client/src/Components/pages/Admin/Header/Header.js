import React, { useState } from "react";
import { Icon, Menu, Segment } from "semantic-ui-react";

// pages
import Home from "../Home/Home";
import Profile from "../../Profile/Profile";
import AddProduct from "../AddProduct/AddProduct";
import CheckUsers from "../CheckUsers/CheckUsers";
import CheckProducts from "../CheckProducts/CheckProducts";

const Header = ({ session }) => {
  const [home, setHome] = useState(false);
  const [profile, setProfile] = useState(false);
  const [addProduct, setAddProduct] = useState(false);
  const [checkProducts, setCheckProducts] = useState(false);
  const [checkUsers, setCheckUsers] = useState(false);

  const setPages = type => {
    switch (type) {
      case "home":
        setHome(true);
        setProfile(false);
        setCheckUsers(false);
        setAddProduct(false);
        setCheckProducts(false);
        break;
      case "profile":
        setProfile(true);
        setHome(false);
        setCheckUsers(false);
        setAddProduct(false);
        setCheckProducts(false);
        break;
      case "addProduct":
        setAddProduct(true);
        setHome(false);
        setProfile(false);
        setCheckUsers(false);
        setCheckProducts(false);
        break;
      case "checkUsers":
        setCheckUsers(true);
        setHome(false);
        setAddProduct(false);
        setProfile(false);
        setCheckProducts(false);
        break;
      case "checkProducts":
        setCheckProducts(true);
        setHome(false);
        setAddProduct(false);
        setProfile(false);
        setCheckUsers(false);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Menu size="large" icon="labeled">
        <Menu.Item onClick={() => setPages("profile")}>
          <Icon name="user" />
          Your Profile
        </Menu.Item>
        <Menu.Item onClick={() => setPages("home")}>
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item onClick={() => setPages("addProduct")}>
          <Icon name="plus" />
          Add Product
        </Menu.Item>
        <Menu.Item onClick={() => setPages("checkProducts")}>
          <Icon name="edit outline" />
          Check Products
        </Menu.Item>
        <Menu.Item onClick={() => setPages("checkUsers")}>
          <Icon name="users" />
          Check Users
        </Menu.Item>
      </Menu>

      <Segment padded="very" basic>
        {!home && !profile && !addProduct && !checkProducts && !checkUsers ? (
          <Home />
        ) : null}
        {home && <Home />}
        {profile && <Profile session={session} />}
        {addProduct && <AddProduct session={session} />}
        {checkUsers && <CheckUsers />}
        {checkProducts && <CheckProducts />}
      </Segment>
    </>
  );
};

export default Header;
