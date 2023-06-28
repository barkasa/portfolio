import React from "react";
import { IoClose } from "react-icons/io5";
import s from "./DescriptionModal.module.css";

const DescriptionModal = ({
  title,
  description,
  location,
  area,
  year,
  onClose,
}) => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <div className={s.content}>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{location}</p>
          <p>{area}</p>
          <p>{year}</p>
        </div>
        <button className={s.closeButton} onClick={onClose}>
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default DescriptionModal;
