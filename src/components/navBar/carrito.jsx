import { useContext } from "react";
import CarritoVacio from "../../assets/icons/carritoVacio";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CarritoLleno from "../../assets/icons/carritoLleno";

const CartWidget = () => {
  const { handleQuantity } = useContext(CartContext);

  return (
    <div>
      {handleQuantity() > 0 ? (
        <Link to={"/cart"}>
          <CarritoLleno />
          <div className="notification">{handleQuantity()}</div>
        </Link>
      ) : (
        <Link to={"/cart"}>
          <CarritoVacio />
        </Link>
      )}
    </div>
  );
};

export default CartWidget;
