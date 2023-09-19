// import React, { useEffect, useState } from "react";
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import DescriptionModal from "../../components/Modal/DescriptionModal/DescriptionModal";
// import ImageModal from "../../components/Modal/ImageModal/ImageModal";
// import s from "./ArtItemPage.module.css";
// import arts from "../../data/arts";
// import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
// import { TfiGallery } from "react-icons/tfi";

// export default function ArtItemPage() {
//   const { artId } = useParams();
//   const navigate = useNavigate();
//   const [art, setArt] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isDescriptionModalOpen, setDescriptionModalOpen] = useState(false);

//   useEffect(() => {
//     const foundArt = arts.find((art) => art.id === +artId);
//     if (foundArt) {
//       setArt(foundArt);
//     } else {
//       navigate("/"); // Перенаправление на главную страницу, если проект не найден
//     }
//   }, [artId, navigate]);

//   const openImageModal = (imageSrc) => {
//     setSelectedImage(imageSrc);
//   };
//   const closeImageModal = () => {
//     setSelectedImage(null);
//   };

//   // Функция для открытия модального окна с описанием
//   const openDescriptionModal = () => {
//     setDescriptionModalOpen(true);
//   };

//   // Функция для закрытия модального окна с описанием
//   const closeDescriptionModal = () => {
//     setDescriptionModalOpen(false);
//   };

//   // Функция для прокрутки страницы вверх
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
//   function scrollToBottom() {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   }

//   // Проверяем, что art определен, прежде чем обращаться к его свойству images
//   const artImages = art && art.images ? art.images : [];

//   return (
//     <div className={s.wrapper_app}>
//       <div className={s.navigation_buttons}>
//         <div className={s.nav_left_buttons}>
//           <div title="Gallery">
//             <NavLink className={s.nav_link} to="/arts">
//               <TfiGallery className={s.back_to_Gallery} />
//             </NavLink>
//           </div>
//         </div>
//         <div
//           className={s.nav_right_buttons}
//           onClick={scrollToBottom}
//           title="Down"
//         >
//           <MdArrowDownward />
//         </div>
//       </div>
//       {/* // */}
//       <div className={s.projectPage}>
//         <div className={s.content_wrapper}>
//           <div className={s.projectImages}>
//             <div className={s.projectImagesGrid}>
//               {artImages.map((imageSrc, index) => (
//                 <LazyLoadImage
//                   key={index}
//                   src={process.env.PUBLIC_URL + imageSrc}
//                   alt={art.title}
//                   onClick={() =>
//                     openImageModal(process.env.PUBLIC_URL + imageSrc)
//                   }
//                 />
//               ))}
//             </div>
//           </div>
//           <div className={s.projectDescription}>
//             <h2>{art.title_item}</h2>
//             <p>{art.description}</p>
//             <p>{art.Year}</p>
//           </div>
//         </div>
//         {selectedImage && (
//           <ImageModal
//             imageUrl={selectedImage}
//             onClose={closeImageModal}
//             onDescriptionOpen={openDescriptionModal}
//           />
//         )}
//         {isDescriptionModalOpen && (
//           <DescriptionModal
//             title={art.title_item}
//             description={art.description}
//             year={art.Year}
//             onClose={closeDescriptionModal}
//           />
//         )}
//       </div>
//       {/* // */}
//       <div className={s.navigation_buttons}>
//         <div className={s.nav_left_buttons}>
//           <div title="Gallery">
//             <NavLink className={s.nav_link} to="/arts">
//               <TfiGallery className={s.back_to_Gallery} />
//             </NavLink>
//           </div>
//         </div>
//         <div className={s.nav_right_buttons} onClick={scrollToTop} title="Up">
//           <MdArrowUpward />
//         </div>
//       </div>
//       {/* // */}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import DescriptionModal from "../../components/Modal/DescriptionModal/DescriptionModal";
import ImageModal from "../../components/Modal/ImageModal/ImageModal";
import s from "./ArtItemPage.module.css";
import arts from "../../data/arts";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";

export default function ArtItemPage() {
  const { artId } = useParams();
  const navigate = useNavigate();
  const [art, setArt] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDescriptionModalOpen, setDescriptionModalOpen] = useState(false);

  useEffect(() => {
    const foundArt = arts.find((art) => art.id === +artId);
    if (foundArt) {
      setArt(foundArt);
    } else {
      navigate("/"); // Перенаправление на главную страницу, если проект не найден
    }
  }, [artId, navigate]);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  // Функция для открытия модального окна с описанием
  const openDescriptionModal = () => {
    setDescriptionModalOpen(true);
  };

  // Функция для закрытия модального окна с описанием
  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
  };

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  return (
    <div className={s.wrapper_app}>
      <div className={s.navigation_buttons}>
        <div className={s.nav_left_buttons}>
          <div title="Gallery">
            <NavLink className={s.nav_link} to="/arts">
              <TfiGallery className={s.back_to_Gallery} />
            </NavLink>
          </div>
        </div>
        <div
          className={s.nav_right_buttons}
          onClick={scrollToBottom}
          title="Down"
        >
          <MdArrowDownward />
        </div>
      </div>
      {/* // */}
      <div className={s.projectPage}>
        <div className={s.content_wrapper}>
          <div className={s.projectImages}>
            <div className={s.projectImagesGrid}>
              {art &&
                art.images.map((imageSrc, index) => (
                  <LazyLoadImage
                    key={index}
                    src={process.env.PUBLIC_URL + imageSrc}
                    alt={art.title}
                    onClick={() =>
                      openImageModal(process.env.PUBLIC_URL + imageSrc)
                    }
                  />
                ))}
            </div>
          </div>
          <div className={s.projectDescription}>
            <h2>{art ? art.title_item : "Art title is not available"}</h2>
            <p>{art ? art.description : "Description is not available"}</p>
            <p>{art ? art.Year : "Year is not available"}</p>
          </div>
        </div>
        {selectedImage && (
          <ImageModal
            imageUrl={selectedImage}
            onClose={closeImageModal}
            onDescriptionOpen={openDescriptionModal}
          />
        )}
        {isDescriptionModalOpen && (
          <DescriptionModal
            title={art ? art.title_item : "Art title is not available"}
            description={art ? art.description : "Description is not available"}
            year={art ? art.Year : "Year is not available"}
            onClose={closeDescriptionModal}
          />
        )}
      </div>
      {/* // */}
      <div className={s.navigation_buttons}>
        <div className={s.nav_left_buttons}>
          <div title="Gallery">
            <NavLink className={s.nav_link} to="/arts">
              <TfiGallery className={s.back_to_Gallery} />
            </NavLink>
          </div>
        </div>
        <div className={s.nav_right_buttons} onClick={scrollToTop} title="Up">
          <MdArrowUpward />
        </div>
      </div>
      {/* // */}
    </div>
  );
}
