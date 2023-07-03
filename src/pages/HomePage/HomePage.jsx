import React from "react";
import s from "./HomePage.module.css";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import projects from "../../data/projects";

export default function HomePage() {
  return (
    <div className={s.wrapper_app}>
      <ProjectsList projects={projects} />
    </div>
  );
}
