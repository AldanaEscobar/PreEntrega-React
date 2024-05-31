import ItemListContainer from "./components/cards/ItemListContainer";
import NavBar from "./components/navBar/navBar";
import "./styles/homePage.css";

function App() {
  return (
    <>
      <div className="app-container">
        <NavBar />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
