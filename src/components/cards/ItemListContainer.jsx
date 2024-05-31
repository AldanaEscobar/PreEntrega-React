import productsData from "../../data/products.json";
import '../../styles/ItemListContainer.css';
import ItemList from './itemList';
import '../../styles/itemlist.css';
import { useEffect, useState } from "react";

function ItemListContainer() {
  let [products, setProducts] = useState([]);

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
        setProducts(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(products);

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
