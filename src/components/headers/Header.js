import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/clients" activeStyle={activeStyle}>
        Clients
      </NavLink>
      {" | "}
      <NavLink to="/groups" activeStyle={activeStyle}>
        Groups
      </NavLink>
      {" | "}
      <NavLink to="/centers" activeStyle={activeStyle}>
        Centers
      </NavLink>
    </nav>
  );
};

export default Header;
