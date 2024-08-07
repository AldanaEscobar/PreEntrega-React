import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from "react";
import CartWidget from './carrito.jsx';

const Menu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item" ref={dropdownRef}>
          <NavLink className="a" onClick={toggleDropdown}>
            GUIAS DE VIAJE
          </NavLink>
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/category/bolivia" className="" onClick={closeDropdown}>Bolivia</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/category/ecuador" className="" onClick={closeDropdown}>Ecuador</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/category/peru" className="" onClick={closeDropdown}>Peru</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/category/uruguay" className="" onClick={closeDropdown}>Uruguay</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/category/nomadedigital" className="" onClick={closeDropdown}>Nomades Digitales</Link>
              </li>
              <li className="dropdown-item">
                <Link to="/" className="" onClick={closeDropdown}>Ver todo</Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar-menu-item li">
          <NavLink to="/proximamente" className="a" >SERVICIOS</NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink to="/proximamente" className="a">BLOG</NavLink>
        </li>
        <li className="navbar-menu-item">
          <NavLink className="a">
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
