import productsData from "../../data/products.json";
import '../../styles/ItemListContainer.css';
import ItemList from './itemList';
import '../../styles/itemlist.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
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
        } else {
        setProducts(res);}
      })
      .catch((err) => {
        console.error(err);
      });
  }, [category]);

  return (
    <div className="body-container">
      <h2 className='title'>Guias:</h2>
      <div className='cards'>
      <ItemList products={products}/>
      </div>
    </div>
  )
}

export default ItemListContainer;
