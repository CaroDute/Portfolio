import { useState } from "react";


/* eslint-disable react/prop-types */
const ProjectsCard = ({ cover, title, url }) => {
  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  return (
    <a href={url} target="_blank" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="cards__single">
        <div className="cards__single--content">
          <div className="cards__single--img">
            <img src={cover} alt={title} />
          </div>
          <div className="cards__single--details">
            {hovered ? <p className="cards__single--details-hover">Voir plus</p> : <h2>{title}</h2>}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
