import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/cards/ItemListContainer";
import NavBar from "./components/navBar/navBar";
import "./styles/homePage.css";
import ItemDetailContainer from "./components/cards/itemDetailContainer";
import NotFound from "./components/NotFound";
import Proximamete from "./components/Proximamete";
import { CartContext } from "./context/CartContext";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const productAdd = [{...product}];
    setCart( [...cart, ...productAdd] );
    };

  const handleQuantity = () => {
    return cart.length;
  }

  return (
    <CartContext.Provider value={ {cart, handleAddToCart, handleQuantity} }>
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/proximamente"element={<Proximamete />} />
          <Route path="/*"element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
