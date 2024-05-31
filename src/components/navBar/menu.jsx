// import ItemCounter from "../ItemCounter";
import { useState } from "react";
import Carrito from "./carrito.jsx";

const Menu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item">
          <a to="" className="a" onClick={toggleDropdown}>
            GUIAS DE VIAJE
          </a>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a to="" className="">Ecuador</a></li>
              <li className="dropdown-item"><a to="" className="">Peru</a></li>
              <li className="dropdown-item"><a to="" className="">Uruguay</a></li>
              <li className="dropdown-item"><a to="" className="">Nomades Digitales</a></li>
            </ul>
          )}
          </li>
        <li className="navbar-menu-item li">
        <a to="" className="a">SERVICIOS</a>
        </li>
        <li className="navbar-menu-item">
        <a to="" className="a">BLOG</a>
        </li>
        <li className="navbar-menu-item">
           <a className="a"> <Carrito />
           <div className="notification">1</div>
           </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
