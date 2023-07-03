import React from "react";
import s from "./NotFoundPage.module.css";
import notFoundPage from "../../assets/404.png";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className={s.wrapper_app}>
      <div className={s.image_wrapper}>
        <img src={notFoundPage} alt="not faund page" />
        <button className={s.back_button} onClick={handleGoBack}>
          Back to projects
        </button>
      </div>
    </div>
  );
}
