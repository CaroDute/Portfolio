/* eslint-disable react/prop-types */
const ModalProject = ({ closeModal }) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <i onClick={closeModal} className="fa-solid fa-circle-xmark"></i>
        <div className="modal__title">
          <h2>Booki</h2>
        </div>
        <div className="modal__img">
          <img
            src="./src/assets/images/projectsCover/bookiCover.png"
            alt="Le site booki desktop"
            className="modal__img--desktop"
          />
          <img
            src="./src/assets/images/projectsResponsive/bookiResponsive.png"
            alt="Le site Booki en responsive téléphone"
            className="modal__img--responsive"
          />
        </div>
        <div className="modal__details">
          <div className="modal__details--description">
            <p>Description du site</p>
          </div>
          <div className="modal__details--langlink">
            <div className="modal__details--langlink-lang">
              <p>Langage</p>
            </div>
            <div className="modal__details--langlink-link">
              <p>Lien</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProject;

{
  /* <div className="cards__single--langages">
              {langage.map((lang, index) => (
                <img key={index} src={lang.iconUrl} alt={lang.name} />
              ))}
            </div> */
}
{
  /* <a href={url} target="_blank">
            <i className="fa-solid fa-link"></i>
          </a> */
}
