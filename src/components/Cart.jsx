import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cart = () => {
const {cart} = useContext(CartContext)

  return (
    <div>
     <h3>Estas por comprar: </h3> 
    {cart.map((item) => (
      <div key={item.id}>
        <h4>{item.name}</h4>
        <img src={item.image} alt={item.name} />
      </div>
    ))}
    </div>
  )
}

export default Cart
