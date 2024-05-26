import { useState, useEffect } from "react";
import productsData from "../../data/products.json";
// import ItemCounter from "../ItemCounter";
import "../../styles/itemlist.css";
import "../../styles/counter.css";

const ItemList = () => {
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
    <>
      {products.length > 0 ? (
        products.map((products) => {
          return (
            <>
              <div className="card" key={products.id}>
                <h2 className="card-title">{products.name}</h2>
                <p className="card-description">{products.description}</p>
                <p className="card-price"> {products.price} USD</p>
                {products.image && <img src={products.image} alt={products.name} />}
                <div className="button-container">
                  <button className="counter-button">Ver mas</button>
                </div>
              </div>
              {/* <div>
                <ItemCounter />
              </div> */}
            </>
          );
        })
      ) : (
        <div className="load-container">
          <div className="loader">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemList;

{
  /* <div class="cards">

<figure class="card">

  <img src="https://www.linkpicture.com/q/1_1484.jpg" />

  <figcaption>Dota 2</figcaption>

</figure> */
}
