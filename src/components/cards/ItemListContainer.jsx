import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config.js';
import '../../styles/ItemListContainer.css';
import ItemList from './itemList';
import '../../styles/itemlist.css';

function ItemListContainer() {
  // const [title, setTitle] = useState("");
  const [products, setProducts] = useState([]);
  const category = useParams().categoryId;

  useEffect(() => {
    const fetchProducts = async () => {
      const productsCollection = collection(db, "guias");
      const productsSnapshot = await getDocs(productsCollection);
      const productsList = productsSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setProducts(productsList);
    };

    fetchProducts();
  }, [category]);

  const formatTitle = (str) => {
    if (str === "nomadedigital") {
      return "Nomade digital";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="body-container">
      <h2 className='title'>{category ? "Guia: " + formatTitle(category) : "Conoce todas nuestras guias"}</h2>
      <div className='cards'>
        <ItemList products={products}/>
      </div>
    </div>
  )
}

export default ItemListContainer;
