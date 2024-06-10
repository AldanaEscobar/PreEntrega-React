import { useContext } from "react";
import CarritoVacio from "../../assets/icons/carritoVacio";
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";
// import { CartContext } from "../../context/CartContext";
// import CarritoLleno from "../../assets/icons/carritoLleno";

const CartWidget = () => {
  const {handleQuantity} = useContext(CartContext)

  return (
    <div>
      <Link to={"/cart"}>
        <CarritoVacio />
        <div className="notification">{handleQuantity()}</div>
      </Link>
    </div>
  )
// } else {
//   return (
//     <div>
//       <CarritoLleno />
//     </div>
//   )
// }
}

export default CartWidget;
