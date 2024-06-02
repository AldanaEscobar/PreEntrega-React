import Menu from "./menu.jsx";
import "../../styles/navBar.css";
import TiendaIcon from "../../assets/icons/TiendaIcon.jsx";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="general-navbar">
      <div className="search-section">
        <NavLink to="/" className="branch-container">
          <div className="branch-name">
          TRINIDAD.ALDI
          </div>
          <div className="branch-icon">
          <TiendaIcon />
          </div>
        </NavLink>
      </div>
      <div>
        <Menu />
      </div>
    </nav>
  );
};

export default NavBar;
