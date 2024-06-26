import ProjectsCard from "./ProjectsCard";
import projects from "/public/projects.json";
import ModalProject from "./ModalProject";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="projects" id="projets">
      {modalOpen && <ModalProject closeModal={closeModal} />}
      <h2 className="projects__title">&#47;&#47; PROJETS</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <div
            className="cards__animation"
            key={project.id}
            data-aos="fade-down"
            data-aos-delay={index * 200}
          >
            <ProjectsCard
              cover={project.cover}
              title={project.title}
              openModal={openModal}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Projects;
