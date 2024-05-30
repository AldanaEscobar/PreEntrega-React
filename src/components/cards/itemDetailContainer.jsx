import { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import "../../styles/itemlist.css";
import "../../styles/counter.css";

const ItemDetailContainer = ({ selectedProductId }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  // const [products, setProducts] = useState([]);

  const showProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });
  };

  useEffect(() => {
    showProducts().then((data) => {
      const product = data.find((p) => p.id === selectedProductId);
      setSelectedProduct(product);
    });
  }, [selectedProductId]);
  console.log('SelectedProd:', selectedProduct)

  return (
    <>
      {selectedProduct ? (
        <div className="detail-container">
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.longdescription}</p>
          <p>{selectedProduct.price} USD</p>
          {selectedProduct.image && <img src={selectedProduct.image} alt={selectedProduct.name} />}
        </div>
      ) : (
        <div></div>
        // <div className="load-container">
        //   <div className="loader">
        //     <div className="line"></div>
        //     <div className="line"></div>
        //     <div className="line"></div>
        //   </div>
        // </div>
      )}
    </>
  );
};

export default ItemDetailContainer;