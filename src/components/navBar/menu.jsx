import Carrito from "./Carrito";

const Menu = () => {
  return (
    <div className="navbar-menu">
      <ul className="navbar-menu-container ul">
        <li className="navbar-menu-item">
          <a to="" className="a">Guias de viaje</a>
        </li>
        <li className="navbar-menu-item li">
        <a to="" className="a">Servicios</a>
        </li>
        <li className="navbar-menu-item">
        <a to="" className="a">Blog</a>
        </li>
        <li className="navbar-menu-item">
           <a className="a"> <Carrito />
           <div className="notification">1</div> </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
