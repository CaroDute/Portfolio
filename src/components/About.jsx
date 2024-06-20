/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="about">
      <div className="about__image">
        <img 
          src="src/assets/images/Bureau.jpeg"
          alt="Photo de moi à mon bureau"
        />
      </div>
      <div className="about__text">
        <p>
          Je m'appelle Caroline et je suis developpeuse junior depuis peu. Je suis passionnée par le monde de la tech et particulierement du developpement web dont j'ai choisi d'en faire mon métier suite à une reconversion professionnelle. 
          Je suis actuellement à la recherche d'un emploi en tant que developpeuse front-end.
          J'ai réalisé de nombreux projets durant ma formation dont vous pouvez avoir un aperçu juste en dessous alors n'hésitez pas à aller découvrir ça et si vous souhaitez me contacter le formulaire vous attend en bas de page ! 
        </p>
      </div>
    </div>
  );
};

export default About;
