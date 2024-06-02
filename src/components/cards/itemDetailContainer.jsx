import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/itemlist.css";
import "../../styles/counter.css";
import "../../styles/itemDetail.css";
import productsData from "../../data/products.json";

const ItemDetailContainer = () => {
  let [product, setProduct] = useState(undefined);
  let { itemId } = useParams();

  useEffect(() => {
    setProduct(productsData.find((prod) => prod.id === itemId));
  }, [itemId]);

  console.log(itemId);

  return (
    <>
      {product ? (
        <div className="detail-container">
          <div className="detail-description">
          <h2 className="title">{product.name}</h2>
          <p className="produt-description">{product.longDescription}</p>
          <div className="price-container">
          <p className="card-price">{product.price} USD</p>
          <Link className="default-button buttton-1" to={`/item/${product.id}`}><span>Es para mi!</span></Link>
          </div>
          </div>
          <div className="detail-image">
          {product.image && <img src={product.image} alt={product.name} />}
          </div>
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
