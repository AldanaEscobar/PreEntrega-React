import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/itemlist.css";
import "../../styles/counter.css";
import "../../styles/itemDetail.css";
import productsData from "../../data/products.json";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  let [product, setProduct] = useState(undefined);
  let { itemId } = useParams();
  const { cart, handleAddToCart } = useContext(CartContext)
  // const [modal, setModal] = useState(false); 


  useEffect(() => {
    setProduct(productsData.find((prod) => prod.id === itemId));
  }, [itemId]);


  return (
    <>
      {product ? (
        <div className="detail-container">
          <div className="detail-description">
          <h2 className="title">{product.name}</h2>
          <p className="produt-description">{product.longDescription}</p>
          <div className="price-container">
          <p className="card-price">{product.price} USD</p>
          <button className="default-button buttton-1" to={`/item/${product.id}`} onClick={() => handleAddToCart(product)}><span>Es para mi!</span></button>
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
