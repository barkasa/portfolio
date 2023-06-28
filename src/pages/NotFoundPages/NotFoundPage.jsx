import React from "react";
import s from "./NotFoundPage.module.css";
import notFoundPage from "../../assets/404.png";

export default function NotFoundPage() {
  return (
    <div className={s.notFoundPage_section}>
      <img src={notFoundPage} alt="not faund page" />
    </div>
  );
}
