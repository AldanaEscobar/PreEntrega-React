import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../../src/styles/ItemListContainer.css'
import '../styles/itemDetail.css'

const Cart = () => {
  const { cart } = useContext(CartContext)

  const total = cart.reduce((acc, item) => acc + item.price, 0)


  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <h3 className="title">Todavía no hay productos seleccionados :(</h3>
          <button className="btn-view-products" onClick={() => cart.viewAll()}>Ver productos</button>
        </div>
      ) : (
        <>
          <h3 className="title">Estas por comprar: </h3> 
        <div className="cart-wrap">
          <div className="cart-detail-container">
            {cart.map((item) => (
              <div key={item.id}>
                <div className="product-container">
                  <img src={item.image} alt={item.name} className="cart-image" />
                  <div className="cart-description">
                    <h4 className="produt-description">{item.name}</h4>
                    <p className="card-price detail-price">USD {item.price}</p>
                    <div className="button-container">
                      <button className="btn-cart view" onClick={() => cart.view(item.id)}>Ver producto</button>
                      <button className="btn-cart delete" onClick={() => cart.remove(item.id)}>Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total-container">
          {cart.map((item) => (
              <div key={item.id}>
          <p className="produt-description">{item.name}</p>
          <p className="card-price detail-price">USD {item.price}</p>
          </div>
          ))}
            <h4>TOTAL:</h4>
            <h4 className="card-price detail-price">USD {total}</h4>
            <button className="default-button buttton-1">Ir a pagar</button>
          </div>
      </div>
        </>
      )}
    </>
  )
}

export default Cart
