import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const InitialCart = JSON.parse(localStorage.getItem('cart')) || [];
console.log(localStorage)

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
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedCart;
    });
  };

  const handleQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, removeItem, handleQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
