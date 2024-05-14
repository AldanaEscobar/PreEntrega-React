import Menu from "./menu";
import Search from "./search";
import "../../styles/navBar.css";
import TiendaIcon from "../../assets/icons/TiendaIcon.jsx";

const NavBar = () => {
  return (
    <nav className="general-navbar">
      <div className="search-section">
        <a to={"/"} className="branch-container">
          <div className="branch-name">
          TRINIDAD.ALDI
          </div>
          <div className="branch-icon">
          <TiendaIcon />
          </div>
        </a>
        <div>
          <Search />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
