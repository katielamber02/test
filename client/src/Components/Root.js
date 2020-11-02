import React from "react";

// Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// components
import Header from "./Header/Header";
import SessionWrapperHOC from "./hocs/SessionWrapperHOC";
import PageNotFound from "./PageNotFound/PageNotFound";

// pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";
import ShoppingCart from "./pages/Shopping Cart/ShoppingCart";
import Details from "./pages/Categories/Details/Details";
import Admin from "./pages/Admin/Admin";

// categories page
import Mobile from "./pages/Categories/Mobile/Mobile";
import Computer from "./pages/Categories/Computer/Computer";
import Television from "./pages/Categories/Television/Television";

const Root = ({ session, refetch }) => (
  <Router>
    {session ? (
      session.activeUser.admin === true ? (
        <Redirect to="/admin" />
      ) : (
        <Header session={session} />
      )
    ) : (
      <Header session={session} />
    )}
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login refetch={refetch} />} />
      <Route
        exact
        path="/register"
        render={() => <Register refetch={refetch} />}
      />
      <Route
        exact
        path="/profile"
        render={() => <Profile session={session} />}
      />
      <Route
        exact
        path="/categories/mobile"
        render={() => <Mobile session={session} />}
      />
      <Route exact path="/categories/computer" render={() => <Computer />} />
      <Route
        exact
        path="/categories/television"
        render={() => <Television />}
      />
      <Route
        exact
        path="/shopping/cart"
        render={() => <ShoppingCart session={session} />}
      />
      <Route
        exact
        path="/categories/details/:id"
        render={() => <Details activeUser={session.activeUser} />}
      />
      <Route exact path="/admin" render={() => <Admin session={session} />} />
      <Route exact path="*" render={() => <PageNotFound session={session} />} />
    </Switch>
  </Router>
);

export default SessionWrapperHOC(Root);
