import React, { useEffect, useState } from "react";
import s from "./ProjectPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import ImageModal from "../../components/Modal/ImageModal/ImageModal";
import DescriptionModal from "../../components/Modal/DescriptionModal/DescriptionModal";
import projects from "../../data/projects";
import {
  MdSkipPrevious,
  MdSkipNext,
  MdArrowUpward,
  MdArrowDownward,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TfiGallery } from "react-icons/tfi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDescriptionModalOpen, setDescriptionModalOpen] = useState(false);

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === +projectId);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate("/"); // Перенаправление на главную страницу, если проект не найден
    }
  }, [projectId, navigate]);

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openDescriptionModal = () => {
    setDescriptionModalOpen(true);
  };

  const closeDescriptionModal = () => {
    setDescriptionModalOpen(false);
  };

  function goToPreviousProject() {
    const currentIndex = projects.findIndex(
      (p) => p.id === parseInt(projectId)
    );
    const previousIndex = currentIndex - 1;

    if (previousIndex >= 0) {
      const previousProjectId = projects[previousIndex].id;
      navigate(`/project/${previousProjectId}`);
      window.scrollTo({ top: 0 });
    } else {
      // Переход на последний проект
      const lastProjectId = projects[projects.length - 1].id;
      navigate(`/project/${lastProjectId}`);
      window.scrollTo({ top: 0 });
    }
  }

  function goToNextProject() {
    const currentIndex = projects.findIndex(
      (p) => p.id === parseInt(projectId)
    );
    const nextIndex = currentIndex + 1;

    if (nextIndex < projects.length) {
      const nextProjectId = projects[nextIndex].id;
      navigate(`/project/${nextProjectId}`);
      window.scrollTo({ top: 0 });
    } else {
      // Переход на первый проект
      const firstProjectId = projects[0].id;
      navigate(`/project/${firstProjectId}`);
      window.scrollTo({ top: 0 });
    }
  }

  if (!project) {
    return <div>Проект не найден</div>;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
          <div onClick={goToPreviousProject} title="Previous Project">
            <MdSkipPrevious />
          </div>
          <div title="Gallery">
            <NavLink className={s.nav_link} to="/portfolio">
              <TfiGallery className={s.back_to_Gallery} />
            </NavLink>
          </div>
          <div onClick={goToNextProject} title="Next Project">
            <MdSkipNext />
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
      <div className={s.projectPage}>
        <div className={s.content_wrapper}>
          <div className={s.projectImages}>
            {project.images.map((imageSrc, index) => (
              <LazyLoadImage
                key={index}
                src={process.env.PUBLIC_URL + imageSrc}
                alt={project.title}
                onClick={() =>
                  openImageModal(process.env.PUBLIC_URL + imageSrc)
                }
              />
            ))}
          </div>
          <div className={s.projectDescription}>
            <h2>{project.title_item}</h2>
            <p>{project.description}</p>
            <p>{project.Location}</p>
            <p>{project.Area}</p>
            <p>{project.Year}</p>
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
            title={project.title_item}
            description={project.description}
            location={project.Location}
            area={project.Area}
            year={project.Year}
            onClose={closeDescriptionModal}
          />
        )}
      </div>
      <div className={s.navigation_buttons}>
        <div className={s.nav_left_buttons}>
          <div onClick={goToPreviousProject} title="Previous Project">
            <MdSkipPrevious />
          </div>
          <div title="Gallery">
            <NavLink className={s.nav_link} to="/portfolio">
              <TfiGallery className={s.back_to_Gallery} />
            </NavLink>
          </div>
          <div onClick={goToNextProject} title="Next Project">
            <MdSkipNext />
          </div>
        </div>
        <div className={s.nav_right_buttons} onClick={scrollToTop} title="Up">
          <MdArrowUpward />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
