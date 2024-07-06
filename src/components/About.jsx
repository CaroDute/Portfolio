/* eslint-disable react/no-unescaped-entities */
import BureauImage from "/images/Bureau.webp";
import FlecheJaune from "/images/fleche-jaune.webp";

const About = () => {
  return (
    <>
      <div id="aboutMe" className="about">
        <div className="about__image">
          <img
            src={BureauImage}
            alt="Photo de moi à mon bureau"
            width="450"
            height="auto"
          />
        </div>
        <div className="about__text">
          <h1 className="about__text--title">Je m'appelle Caroline, </h1>
          <p>
            je suis{" "}
            <span className="about__text--motsclés">developpeuse junior</span>.
            J'ai choisi d'en faire mon métier suite à une reconversion
            professionnelle. En suivant une formation
            <span className="about__text--motsclés"> d'intégration web </span>
            auprès d'OpenClassrooms, j'ai pu y developper mes compétences en{" "}
            <span className="about__text--motsclés">front-end</span>.
            Travaillant principalement sur les bases
            <span className="about__text--langages"> HTML/ CSS</span> ainsi que{" "}
            <span className="about__text--langages">Javascript</span>. Pour
            aller un peu plus loin, j'ai egalement travaillé sur{" "}
            <span className="about__text--langages">React et Redux</span>. Je
            suis actuellement à la recherche d'un emploi en tant que
            developpeuse front-end. Vous pouvez avoir un aperçu juste en dessous
            de nombreux projets que j'ai réalisé durant ma formation. N'hésitez
            pas à aller découvrir ça et si vous souhaitez{" "}
            <span className="about__text--motsclés">me contacter </span>le
            formulaire vous attend en bas de page !
          </p>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        data-aos-duration="1000"
        className="container"
      >
        <a href="#projets">
          <img
            src={FlecheJaune}
            alt="fleche jaune"
            className="container__arrow animate__animated animate__flip"
          />
        </a>
      </div>
    </>
  );
};

export default About;
