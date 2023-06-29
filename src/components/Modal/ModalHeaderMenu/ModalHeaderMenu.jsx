import React from "react";
import PropTypes from "prop-types";
import s from "../ModalHeaderMenu/ModalHeaderMenu.module.css";

import { TfiClose } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const ModalHeaderMenu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={s.modal}>
      <div className={s.modal_content}>
        <div className={s.modal_close} onClick={onClose}>
          <TfiClose className={s.close_icon} />
        </div>
        <div className={s.modal_links}>
          <NavLink
            className={s.nav_link}
            to="/"
            activeclassname={s.active}
            onClick={handleLinkClick}
          >
            Design
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/about"
            activeclassname={s.active}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            className={s.nav_link}
            to="/contacts"
            activeclassname={s.active}
            onClick={handleLinkClick}
          >
            Contacts
          </NavLink>
        </div>
      </div>
    </div>
  );
};

ModalHeaderMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeaderMenu;
