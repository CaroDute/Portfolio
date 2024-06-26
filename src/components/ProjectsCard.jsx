import { useState } from "react";

/* eslint-disable react/prop-types */
const ProjectsCard = ({ cover, title, openModal }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <a
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          e.preventDefault();
          openModal();
        }}
      >
        <div className="cards__single">
          <div className="cards__single--content">
            <div className="cards__single--img">
              <img src={cover} alt={title} />
            </div>
            <div className="cards__single--details">
              {hovered ? (
                <p className="cards__single--details-hover">Voir plus</p>
              ) : (
                <h2 className="cards__title">{title}</h2>
              )}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectsCard;
