import ItemListContainer from "./cards/ItemListContainer";
import NavBar from "./navBar/NavBar";

const Tienda = () => {
    return (
        <div>
            <NavBar />
            <div className="body-container">
            <ItemListContainer products="Guia de Ecuador"/>
            </div>
        </div>
    )
}

export default Tienda