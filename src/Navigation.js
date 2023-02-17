import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "20px",
  margin: "0 6px 6px",
  background: "#F58426",
  textDecoration: "none",
  color: "white",
}

function Navigation() {
    
    return (
        <div>
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#EB6123" }}> Home </NavLink>
            <NavLink to="/stores" exact style={linkStyles} activeStyle={{background: "#EB6123" }}> Stores </NavLink>
        </div>
    )
}

export default Navigation