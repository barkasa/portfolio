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
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const ImageModal = ({ onClose, onDescriptionOpen, imageUrl }) => {
  const { projectId, imageIndex } = useParams();
  const project = projects.find((p) => p.id === parseInt(projectId));
  const images = project ? project.images : [];

  // const [activeIndex, setActiveIndex] = useState(
  //   imageIndex || images.findIndex((img) => img === imageUrl) || 0
  // );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const initialIndex = images.findIndex((img) => img === imageUrl);
    if (initialIndex !== -1) {
      setActiveIndex(initialIndex);
    }
  }, [imageUrl, images]);

  // eslint-disable-next-line no-unused-vars
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.offsetWidth);
    }
  }, [activeIndex]);

  const prevImage = () => {
    const newIndex = activeIndex <= 0 ? images.length - 1 : activeIndex - 1;
    updateUrl(newIndex);
    setActiveIndex(newIndex);
  };

  const nextImage = () => {
    let newIndex;
    if (activeIndex === images.length - 1) {
      newIndex = 0;
    } else {
      newIndex = activeIndex + 1;
    }
    updateUrl(newIndex);
    setActiveIndex(newIndex);
  };

  const updateUrl = (index) => {
    const pathname = window.location.pathname.replace(
      `/${imageIndex}`,
      `/${index}`
    );
    window.history.replaceState({}, "", pathname);
  };

  const getImageUrl = (url) => {
    if (url && url.startsWith("/portfolio")) {
      return url;
    } else {
      return url ? `/portfolio${url}` : null;
    }
  };

  const currentImageUrl = getImageUrl(images[activeIndex]) || imageUrl;

  return (
    <div className={`${s.overlay} ${s.wrapper_app}`}>
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
                <LazyLoadImage
                  ref={imageRef}
                  src={currentImageUrl}
                  alt={` ${activeIndex + 1}`}
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
