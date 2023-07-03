import React, { useState, useCallback, useEffect } from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import Burger from "../Burger/Burger";
import ModalHeaderMenu from "../Modal/ModalHeaderMenu/ModalHeaderMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 810);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseModal = () => {
    setIsMenuOpen(false);
  };

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= 810);
    if (window.innerWidth > 810) {
      handleCloseModal();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className={s.header}>
      <div className={s.logo_wrapper}>
        <NavLink className={s.logo_link} to="/">
          <img src={logo2} alt="logo" />
        </NavLink>
      </div>
      <div className={s.nav_wrapper}>
        {isMobile ? (
          <>
            <Burger onClick={handleMenuToggle} />
            <ModalHeaderMenu isOpen={isMenuOpen} onClose={handleCloseModal} />
          </>
        ) : (
          <>
            <NavLink className={s.nav_link} to="/">
              Design
            </NavLink>
            <NavLink className={s.nav_link} to="/itProjects">
              It-projects
            </NavLink>
            <NavLink className={s.nav_link} to="/arts">
              Arts
            </NavLink>
            <NavLink className={s.nav_link} to="/about">
              About
            </NavLink>
            <NavLink className={s.nav_link} to="/contacts">
              Contacts
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
