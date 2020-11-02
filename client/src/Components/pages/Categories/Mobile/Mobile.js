import React from "react";
import Auth from "../../../hocs/Auth";
import MobileCard from "./MobileCard";

const Mobile = ({ session }) => <MobileCard activeUser={session.activeUser} />;

export default Auth(session => session && session.activeUser)(Mobile);
