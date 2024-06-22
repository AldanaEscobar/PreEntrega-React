import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { showConfirmationModal, showSuccessToast } from '../components/modals/Modals';

export const CartContext = createContext();

const InitialCart = JSON.parse(localStorage.getItem('cart')) || [];

// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(InitialCart);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    showSuccessToast();
  };

  const removeItem = (itemId) => {
    showConfirmationModal(true).then((result) => {
      if (result.isConfirmed) {
        setCart((prevCart) => {
          const updatedCart = prevCart.map(item => {
            if (item.id === itemId) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          }).filter(item => item.quantity > 0);
          return updatedCart;
        });
        Swal.fire({
          title: "Se eliminó el producto correctamente",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: 'custom-swal-title',
            text: 'custom-swal-text',
          }
        });
      }
    });
  };

  const deleteCart = () => {
    showConfirmationModal(false).then((result) => {
      if (result.isConfirmed) {
        setCart([]);
        Swal.fire({
          title: "Carrito Vaciado!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: 'custom-swal-title',
            text: 'custom-swal-text',
          }
        });
      }
    });
  };

  const handleQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const total = () => {
    return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, removeItem, handleQuantity, deleteCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
