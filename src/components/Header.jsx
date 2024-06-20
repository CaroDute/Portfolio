import LogoHeader from "./LogoHeader";

const Header = () => {
  return (
    <div className="main-container header">
      <div className="header__name">
        <p className="header__firstName">Caroline</p>
        <p className="header__lastName">Duteurtre</p>
        <p className="header__details">Développeuse <span className="header__details--color">Web</span></p>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#aboutMe">About me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projetcs">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <LogoHeader src="./src/assets/images/LogoHeader.png" alt="Logo CD" />
    </div>
  );
};

export default Header;
