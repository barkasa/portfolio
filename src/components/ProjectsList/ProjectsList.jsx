import React, { useState } from "react";
import s from "./ProjectsList.module.css";
import { Link } from "react-router-dom";

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
            <img
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

// import React, { useState } from "react";
// import s from "./ProjectsList.module.css";
// import { Link } from "react-router-dom";

// export default function ProjectsList({ projects }) {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   const handleMouseEnter = (project) => {
//     setHoveredProject(project.id);
//   };

//   const handleMouseLeave = () => {
//     setHoveredProject(null);
//   };

//   return (
//     <div className={s.projectsList}>
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className={`${s.projectItem} ${
//             hoveredProject === project.id ? s.hovered : ""
//           }`}
//           onMouseEnter={() => handleMouseEnter(project)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link
//             to={{
//               pathname: `/project/${project.id}`,
//               state: { activeImageIndex: 0 }, // передаем индекс первого изображения
//             }}
//           >
//             <img
//               src={process.env.PUBLIC_URL + project.image}
//               alt={project.title}
//               className={s.projectImage}
//             />
//           </Link>
//           <h3 className={s.projectTitle}>{project.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
