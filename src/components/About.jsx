/* eslint-disable react/no-unescaped-entities */
import BureauImage from "/images/Bureau.webp";
import FlecheJaune from "/images/fleche-jaune.webp";

const About = () => {
  return (
    <>
      <div id="aboutMe" className="about">
        <div className="about__image">
          <img src={BureauImage} alt="Photo de moi à mon bureau" />
        </div>
        <div className="about__text">
          <h1 className="about__text--title">Je m'appelle Caroline, </h1>
          <p>
            je suis developpeuse junior. J'ai choisi d'en faire mon métier suite
            à une reconversion professionnelle. J'ai suivi une formation
            d'intégration web auprès d'OpenClassrooms. J'ai pu y developper mes
            compétences en front-end, en travaillant principalement sur les
            bases HTML/ CSS ainsi que Javascript. Pour aller un peu plus loin,
            j'ai egalement travaillé sur React et Redux. J'ai pu developper des
            compétences en SEO et en optimisation des performances. Je suis
            actuellement à la recherche d'un emploi en tant que developpeuse
            front-end. J'ai réalisé de nombreux projets durant ma formation dont
            vous pouvez avoir un aperçu juste en dessous. N'hésitez pas à aller
            découvrir ça et si vous souhaitez me contacter le formulaire vous
            attend en bas de page !
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
            alt="fleche bleu"
            className="container__arrow animate__animated animate__flip"
          />
        </a>
      </div>
    </>
  );
};

export default About;
