import React from "react";
import Auth from "../../hocs/Auth";
import Header from "./Header/Header";

const Admin = ({ session }) => (
  <Header session={session} />
);

export default Auth(session => session && session.activeUser)(Admin);
