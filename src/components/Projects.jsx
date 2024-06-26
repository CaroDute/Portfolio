import ProjectsCard from "./ProjectsCard";
import projects from "/public/projects.json";

const Projects = () => {

  const card = projects.map((project) => (
    <ProjectsCard
      key={project.id}
      cover={project.cover}
      title={project.title}
      langage={project.langage}
      url={project.url}
    />
  ));

  return (
    <div className="projects">
      <div className="cards">{card}</div>
    </div>
  );
};

export default Projects;
