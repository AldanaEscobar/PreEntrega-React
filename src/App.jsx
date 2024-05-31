import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/cards/ItemListContainer";
import NavBar from "./components/navBar/navBar";
import "./styles/homePage.css";
import ItemDetailContainer from "./components/cards/itemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/*" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
