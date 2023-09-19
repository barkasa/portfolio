// import React, { useState } from "react";
// import s from "./ArtsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ArtsList({ arts, openImageModal }) {
//   const [hoveredArt, setHoveredArt] = useState(null);

//   const handleMouseEnter = (art) => {
//     setHoveredArt(art.id);
//   };

//   const handleMouseLeave = () => {
//     setHoveredArt(null);
//   };

//   return (
//     <div className={s.artList}>
//       {arts &&
//         arts.map((art) => (
//           <div
//             key={art.id}
//             className={`${s.artsItem} ${
//               hoveredArt === art.id ? s.hovered : ""
//             }`}
//             onMouseEnter={() => handleMouseEnter(art)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <Link to={`/arts/${art.id}`}>
//               <LazyLoadImage
//                 src={process.env.PUBLIC_URL + art.image}
//                 alt={art.title}
//                 className={s.artsImage}
//                 onClick={() => openImageModal(art.image)}
//               />
//             </Link>
//             <h3 className={s.artsTitle}>{art.title_item}</h3>
//           </div>
//         ))}
//     </div>
//   );
// }
// import React, { useState } from "react";
// import s from "./ArtsList.module.css";
// import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// export default function ArtsList({ arts, openImageModal }) {
//   const [hoveredArt, setHoveredArt] = useState(null);

//   const handleMouseEnter = (art) => {
//     setHoveredArt(art.id);
//   };

//   const handleMouseLeave = () => {
//     setHoveredArt(null);
//   };

//   return (
//     <div className={s.artList}>
//       {arts.map((art) => (
//         <div
//           key={art.id}
//           className={`${s.artsItem} ${hoveredArt === art.id ? s.hovered : ""}`}
//           onMouseEnter={() => handleMouseEnter(art)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link to={`/arts/${art.categoryId}/${art.id}`}>
//             <LazyLoadImage
//               src={process.env.PUBLIC_URL + art.image}
//               alt={art.title}
//               className={s.artsImage}
//               onClick={() => openImageModal(process.env.PUBLIC_URL + art.image)}
//             />
//           </Link>
//           <h3 className={s.artsTitle}>{art.title_item}</h3>
//         </div>
//       ))}
//     </div>
//   );
// }
