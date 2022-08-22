import logo from "../assets/airbnb-logo.png";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
