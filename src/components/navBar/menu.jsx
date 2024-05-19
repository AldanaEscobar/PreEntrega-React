// import ItemCounter from "../ItemCounter";
import Carrito from "./carrito.jsx";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item">
          <a to="" className="a">GUIAS DE VIAJE</a>
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
