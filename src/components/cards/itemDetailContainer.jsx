import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/itemlist.css";
import "../../styles/counter.css";
import productsData from "../../data/products.json";

const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [product, setProduct] = useState(undefined);

  useEffect(() => {
    setProduct(productsData.find((prod) => prod.id === parseInt(itemId)));
  }, [itemId]);

  return (
    <>
      {product ? (
        <div className="detail-container">
          <h2>{product.name}</h2>
          <p>{product.longdescription}</p>
          <p>{product.price} USD</p>
          {product.image && <img src={product.image} alt={product.name} />}
        </div>
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

export default ItemDetailContainer;
