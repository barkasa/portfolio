// import React, { useState } from "react";
// import s from "./ProjectsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// import "react-lazy-load-image-component/src/effects/blur.css";

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
//           <Link to={`/project/${project.id}`}>
//             <LazyLoadImage
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

// import React, { useState } from "react";
// import s from "./ProjectsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ProjectsList({ projects }) {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   return (
//     <div className={s.projectsList}>
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className={s.projectItem}
//           onMouseEnter={() => setHoveredProject(project.id)}
//           onMouseLeave={() => setHoveredProject(null)}
//         >
//           <Link to={`/project/${project.id}`}>
//             {hoveredProject === project.id ? (
//               <video
//                 className={s.projectVideo}
//                 src={process.env.PUBLIC_URL + project.video}
//                 autoPlay
//                 loop
//                 muted
//               />
//             ) : (
//               <LazyLoadImage
//                 src={process.env.PUBLIC_URL + project.image}
//                 alt={project.title}
//                 className={s.projectImage}
//               />

//             )}
//           </Link>
//           <h3 className={s.projectTitle}>{project.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import s from "./ProjectsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ProjectsList({ projects }) {
//   const [hoveredProject, setHoveredProject] = useState(null);

//   return (
//     <div className={s.projectsList}>
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className={s.projectItem}
//           onMouseEnter={() => setHoveredProject(project.id)}
//           onMouseLeave={() => setHoveredProject(null)}
//         >
//           <Link to={`/project/${project.id}`}>
//             {/* Статичное изображение, показывается по умолчанию */}
//             <LazyLoadImage
//               src={process.env.PUBLIC_URL + project.image}
//               alt={project.title}
//               className={`${s.projectImage} ${
//                 hoveredProject === project.id ? s.hidden : ""
//               }`}
//             />
//             {/* Видео, показывается только при наведении */}
//             <video
//               className={`${s.projectVideo} ${
//                 hoveredProject === project.id ? s.visible : s.hidden
//               }`}
//               src={process.env.PUBLIC_URL + project.video}
//               muted
//               loop
//               playsInline
//             />
//           </Link>
//           <h3 className={s.projectTitle}>{project.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useState, useRef } from "react";
// import s from "./ProjectsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ProjectsList({ projects }) {
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const videoRefs = useRef({});

//   const handleMouseEnter = (projectId) => {
//     setHoveredProject(projectId);
//     if (videoRefs.current[projectId]) {
//       videoRefs.current[projectId].play(); // Запуск видео
//     }
//   };

//   const handleMouseLeave = (projectId) => {
//     setHoveredProject(null);
//     if (videoRefs.current[projectId]) {
//       videoRefs.current[projectId].pause(); // Остановка видео
//       videoRefs.current[projectId].currentTime = 0; // Сброс времени
//     }
//   };

//   return (
//     <div className={s.projectsList}>
//       {projects.map((project) => (
//         <div
//           key={project.id}
//           className={s.projectItem}
//           onMouseEnter={() => handleMouseEnter(project.id)}
//           onMouseLeave={() => handleMouseLeave(project.id)}
//         >
//           <Link to={`/project/${project.id}`}>
//             {/* Статичное изображение, показывается по умолчанию */}
//             <LazyLoadImage
//               src={process.env.PUBLIC_URL + project.image}
//               alt={project.title}
//               className={`${s.projectImage} ${
//                 hoveredProject === project.id ? s.hidden : ""
//               }`}
//             />
//             {/* Видео, показывается только при наведении */}
//             <video
//               ref={(el) => (videoRefs.current[project.id] = el)}
//               className={`${s.projectVideo} ${
//                 hoveredProject === project.id ? s.visible : s.hidden
//               }`}
//               src={process.env.PUBLIC_URL + project.video}
//               muted
//               loop
//               playsInline
//               type="video/mp4" // Указываем тип видео
//               onError={(e) => console.error("Ошибка загрузки видео", e)} // Логируем ошибку
//             />
//           </Link>
//           <h3 className={s.projectTitle}>{project.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useState } from "react";
import s from "./ProjectsList.module.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectsList({ projects }) {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className={s.projectsList}>
      {projects.map((project) => (
        <div
          key={project.id}
          className={s.projectItem}
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <Link to={`/project/${project.id}`}>
            {/* Статичное изображение, показывается по умолчанию */}
            <LazyLoadImage
              src={process.env.PUBLIC_URL + project.image}
              alt={project.title}
              className={`${s.projectImage} ${
                hoveredProject === project.id ? s.hidden : ""
              }`}
            />
            {/* Видео, показывается только при наведении */}
            {project.video ? (
              <video
                className={`${s.projectVideo} ${
                  hoveredProject === project.id ? s.visible : s.hidden
                }`}
                src={process.env.PUBLIC_URL + project.video}
                type="video/mp4"
                muted
                loop
                playsInline
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0; // Сброс к началу
                }}
                onError={(e) => {
                  console.error("Ошибка загрузки видео", e);
                }}
              />
            ) : (
              <div className={s.placeholderVideo}></div> // Плейсхолдер, если нет видео
            )}
          </Link>
          <h3 className={s.projectTitle}>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}
