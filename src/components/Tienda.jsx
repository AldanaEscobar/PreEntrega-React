// import ItemCounter from "./ItemCounter";
import ItemListContainer from "./cards/ItemListContainer";
import NavBar from "./navBar/navBar";
const Tienda = () => {
    return (
        <div>
            <NavBar />
            <div className="body-container">
            <ItemListContainer products="Guia de Ecuador"/>
            {/* <ItemCounter /> */}
            </div>
        </div>
    )
}

export default Tienda