// import ItemCounter from "../ItemCounter";
import { Link,  NavLink } from 'react-router-dom';
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
          <NavLink to="" className="a" activeclassname="active" onClick={toggleDropdown}>
            GUIAS DE VIAJE
          </NavLink>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/category/ecuador" className="">Ecuador</Link></li>
              <li className="dropdown-item"><Link to="/category/peru" className="">Peru</Link></li>
              <li className="dropdown-item"><Link to="/category/uruguay" className="">Uruguay</Link></li>
              <li className="dropdown-item"><Link to="/category/nomadedigital" className="">Nomades Digitales</Link></li>
              <li className="dropdown-item"><Link to="/" className="">Ver todo</Link></li>
            </ul>
          )}
          </li>
        <li className="navbar-menu-item li">
        <NavLink to="" className="a" activeclassname="active">SERVICIOS</NavLink>
        </li>
        <li className="navbar-menu-item">
        <NavLink to="" className="a" activeclassname="active">BLOG</NavLink>
        </li>
        <li className="navbar-menu-item">
           <NavLink className="a"> <Carrito />
           <div className="notification">1</div>
           </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
