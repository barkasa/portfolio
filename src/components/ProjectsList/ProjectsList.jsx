import React, { useState } from "react";
import s from "./ProjectsList.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectsList({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHoveredProject(project.id);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <div className={s.projectsList}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={`${s.projectItem} ${
            hoveredProject === project.id ? s.hovered : ""
          }`}
          onMouseEnter={() => handleMouseEnter(project)}
          onMouseLeave={handleMouseLeave}
        >
          <Link to={`/project/${project.id}`}>
            <LazyLoadImage
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
              className={s.projectImage}
            />
          </Link>
          <h3 className={s.projectTitle}>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
