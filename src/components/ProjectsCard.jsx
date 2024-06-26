/* eslint-disable react/prop-types */
const ProjectsCard = ({ cover, title, langage, url }) => {
  return (
    <div className="cards__single">
      <div className="cards__single--content">
        <div className="cards__single--img">
          <img src={cover} alt={title} />
        </div>
        <div className="cards__single--details">
          <p>{title}</p>
          <div className="cards__single--langages">
            {langage.map((lang, index) => (
              <img key={index} src={lang.iconUrl} alt={lang.name} />
            ))}
          </div>
          <a href={url} target="_blank">
            <i className="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
