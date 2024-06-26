import ProjectsCard from "./ProjectsCard";
import projects from "/public/projects.json";
import { useEffect } from "react";
import AOS from "aos";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="projects" id="projets">
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
              langage={project.langage}
              url={project.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
