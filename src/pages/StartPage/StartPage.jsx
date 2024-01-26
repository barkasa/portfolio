import React from "react";
import s from "./StartPage.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowCircleDown } from "react-icons/fa";
import foto from "../../assets/i4.png";

export default function StartPage() {
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className={s.wrapper_app}>
      <div className={s.startPage}>
        <div className={s.greeting}>
          <div className={s.greeting_wrapp}>
            <div className={s.greeting_name_wrapp}>
              <div>
                <div className={s.greeting_name}>
                  <h2 className={s.greeting_name_wite}>I'm </h2>
                  <h2 className={s.greeting_name_black}>Morozov Ivan</h2>
                </div>
                <div>
                  <p className={s.greeting_description}>
                    "From canvas to interiors, welcome to my creative spaces."
                  </p>
                </div>
              </div>
            </div>
            <div className={s.greeting_name_foto}>
              <img src={foto} alt="foto me" />
            </div>
          </div>
        </div>

        <p className={s.description}>
          I'm 3D visualiser, artist. I specialise in creating unique and
          creative spaces, small forms, arts and drawing.
        </p>

        <div className={s.description_baner}>
          <div className={s.description_link}>
            <p className={s.description_inBaner}>
              You can see my works in the following sections:
              <button className={s.button}>
                <NavLink className={s.nav_link} to="/portfolio">
                  Interios
                </NavLink>
              </button>
              or
              <button className={s.button}>
                <NavLink className={s.nav_link} to="/arts">
                  Arts
                </NavLink>
              </button>
            </p>
          </div>
          <p className={s.description_inBaner}>
            If you want to know more about me, visit the section:
            <button className={s.button}>
              <NavLink className={s.nav_link} to="/about">
                About
              </NavLink>
            </button>
          </p>
        </div>
        <div className={s.description}>
          <p>
            If you have any questions or would like to discuss a possible
            co-operation, please contact me.
          </p>
          <FaArrowCircleDown
            className={s.scroll_doun}
            onClick={scrollToBottom}
            title="Down"
          />
        </div>
      </div>
    </div>
  );
}
