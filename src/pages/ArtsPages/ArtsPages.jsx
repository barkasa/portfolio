import React, { useState } from "react";

import s from "./ArtsPages.module.css";
import arts from "../../data/arts";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ArtsPages() {
  const [hoveredArt, setHoveredArt] = useState(null);

  const handleMouseEnter = (art) => {
    setHoveredArt(art.id);
  };

  const handleMouseLeave = () => {
    setHoveredArt(null);
  };

  return (
    <div className={s.wrapper_app}>
      <div className={s.artList}>
        {arts
          ? arts.map((art) => (
              <div
                key={art.id}
                className={`${s.artsItem} ${
                  hoveredArt === art.id ? s.hovered : ""
                }`}
                onMouseEnter={() => handleMouseEnter(art)}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={`/arts/${art.id}`}>
                  <LazyLoadImage
                    src={process.env.PUBLIC_URL + art.image}
                    alt={art.title}
                    className={s.artsImage}
                  />
                </Link>
                <h3 className={s.artsTitle}>{art.title}</h3>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
