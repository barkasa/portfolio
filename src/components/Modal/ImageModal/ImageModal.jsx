import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import { useParams } from "react-router-dom";
import s from "./ImageModal.module.css";
import projects from "../../../data/projects";

const ImageModal = ({ onClose, onDescriptionOpen, imageUrl }) => {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));
  const images = project ? project.images : [];

  const [activeIndex, setActiveIndex] = useState(
    images.findIndex((image) => image === imageUrl)
  );
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [activeIndex]);

  const prevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    console.log("Previous Image");
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    console.log("Next Image");
  };

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <div className={s.content}>
          <div className={s.button_wrapper}>
            <TbFileDescription
              className={s.description_Button}
              onClick={onDescriptionOpen}
            />
            <IoClose className={s.closeButton} onClick={onClose} />
          </div>
          <div className={s.arrow_wrapper}>
            <div className={s.carousel}>
              <MdOutlineArrowBackIos
                className={`${s.carouselButton} ${s.left}`}
                onClick={prevImage}
              />

              {images.length > 0 && (
                <img
                  ref={imageRef}
                  src={images[activeIndex]}
                  alt="Project"
                  className={s.image}
                />
              )}
              <MdOutlineArrowForwardIos
                className={`${s.carouselButton} ${s.right}`}
                onClick={nextImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
