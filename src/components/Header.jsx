const Header = () => {
  return (
    <div className="main-container header">
      <div className="header__name">
        <p className="header__firstName">Caroline</p>
        <p className="header__lastName">Duteurtre</p>
        <p className="header__details">
          Développeuse <span className="header__details--color">Web</span>
        </p>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#aboutMe">&lt; About me &gt;</a>
          </li>
          <li>
            <a href="#skills">&#123; Skills &#125;</a>
          </li>
          <li>
            <a href="#projetcs"> &#91; Projects &#93; </a>
          </li>
          <li>
            <a href="#contact">&#40; Contact &#41;</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
