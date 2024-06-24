import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/cards/ItemListContainer";
import NavBar from "./components/navBar/navBar";
import "./styles/homePage.css";
import ItemDetailContainer from "./components/cards/itemDetailContainer";
import NotFound from "./components/NotFound";
import Proximamete from "./components/Proximamete";
import CartProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <CartProvider>
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
