/* eslint-disable react/prop-types */
const LogoHeader = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} className="header__logo" />
    </div>
  );
};

export default LogoHeader;