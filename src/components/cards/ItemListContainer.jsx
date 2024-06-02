import productsData from "../../data/products.json";
import '../../styles/ItemListContainer.css';
import ItemList from './itemList';
import '../../styles/itemlist.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [title, setTitle] = useState("");
  let [products, setProducts] = useState([]);
  const category = useParams().categoryId;

  const showProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });
  };

  useEffect(() => {
    showProducts()
      .then((res) => {
        if(category) {
          setProducts(res.filter((product) => product.category === category));
          setTitle(formatTitle(category));
        } else {
        setProducts(res);}
        // setTitle("Conoce todas nuestras guias");
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);



  const formatTitle = (str) => {
    if (str === "nomadedigital") {
      return "Nomade digital";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="body-container">
      <h2 className='title'> {category ? "Guia: " + title : "Conoce todas nuestras guias"}</h2>
      <div className='cards'>
      <ItemList products={products}/>
      </div>
    </div>
  )
}

export default ItemListContainer;
