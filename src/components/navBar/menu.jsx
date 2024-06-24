import { Link,  NavLink } from 'react-router-dom';
import { useState } from "react";
import CartWidget from './carrito.jsx';

const Menu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item">
          <NavLink className="a" activeclassname="active" onClick={toggleDropdown}>
            GUIAS DE VIAJE
          </NavLink>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item"><Link to="/category/bolivia" className="" onClick={dropdownVisible}>Bolivia</Link></li>
              <li className="dropdown-item"><Link to="/category/ecuador" className="" onClick={dropdownVisible}>Ecuador</Link></li>
              <li className="dropdown-item"><Link to="/category/peru" className="" onClick={dropdownVisible}>Peru</Link></li>
              <li className="dropdown-item"><Link to="/category/uruguay" className="" onClick={dropdownVisible}>Uruguay</Link></li>
              <li className="dropdown-item"><Link to="/category/nomadedigital" className="" onClick={dropdownVisible}>Nomades Digitales</Link></li>
              <li className="dropdown-item"><Link to="/" className="" onClick={dropdownVisible}>Ver todo</Link></li>
            </ul>
          )}
          </li>
        <li className="navbar-menu-item li">
        <NavLink to="/proximamente" className="a" activeclassname="active">SERVICIOS</NavLink>
        </li>
        <li className="navbar-menu-item">
        <NavLink to="/proximamente" className="a" activeclassname="active">BLOG</NavLink>
        </li>
        <li className="navbar-menu-item">
           <NavLink className="a"> <CartWidget />
           </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
