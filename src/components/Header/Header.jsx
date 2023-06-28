import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className={s.header_wrapper}>
      <NavLink className={s.logo_link} to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className={s.nav_wrapper}>
        <NavLink className={s.nav_link} to="/">
          Design
        </NavLink>
        <NavLink className={s.nav_link} to="/about">
          About
        </NavLink>
        <NavLink className={s.nav_link} to="/contacts">
          Contacts
        </NavLink>
      </div>
    </div>
  );
}
