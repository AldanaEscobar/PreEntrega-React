import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../../src/styles/ItemListContainer.css';
import '../styles/itemDetail.css';

const Cart = () => {
  const { cart, removeItem, showModal, total } = useContext(CartContext);

  const handleViewProducts = () => {
    window.location.href = '/';
  };

  const handlePay = () => {
    window.location.href = '/checkout';
  };

  const handleViewProduct = (item) => {
    if (item && item.id) {
      window.location.href = `/item/${item.id}`;
    } else {
      console.error('El item no tiene un id definido:', item);
    }
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <h3 className="title">Todavía no hay productos seleccionados :(</h3>
          <button className="default-button buttton-1" onClick={handleViewProducts}><span>Ver productos</span></button>
        </div>
      ) : (
        <>
          <h3 className="title"> Tu compra: </h3>
          <div className="cart-wrap">
            <div className="cart-detail-container">
              {cart.map((item) => (
                <div key={item.id}>
                  <div className="product-container">
                    <img src={item.image} alt={item.name} className="cart-image" />
                    <div className="cart-description">
                      <h4 className="product-description">{item.name}</h4>
                      <div className="card-quantity">
                      <p className="card-price detail-price">USD {item.price}</p>
                      <p className="product-quantity">Cantidad: {item.quantity}</p>
                      </div>
                      <div className="button-container">
                        <button className="btn-cart" onClick={() => handleViewProduct(item)}>Ver producto</button>
                        <button className="btn-cart" onClick={() => removeItem(item.id)}>Eliminar</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total-container">
              {cart.map((item) => (
                <div key={item.id}>
                  <p className="product-description">{item.name}</p>
                  <div className="card-quantity">
                  <p className="card-price detail-price">USD {item.price}</p>
                  <p className="product-quantity">Cantidad: {item.quantity}</p>
                  </div>
                </div>
              ))}
              <h4 className="product-total">TOTAL: USD {total()}</h4>
              <div className="buttons-wrap">
              <button className="default-button buttton-1" onClick={() => handlePay()}><span>Ir a pagar</span></button>
              <button className="btn-cart" onClick={() => showModal()}>Vaciar carrito</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
