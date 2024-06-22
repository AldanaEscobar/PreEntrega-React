import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/itemlist.css";
import "../../styles/counter.css";
import "../../styles/itemDetail.css";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config.js";
import { doc, getDoc } from "firebase/firestore";
// import BackArrow from "../../assets/icons/BackArrow.jsx";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(undefined);
  const { itemId } = useParams();
  const { handleAddToCart } = useContext(CartContext);
  // const { cart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const productRef = doc(db, "guias", itemId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({ ...productSnap.data(), id: productSnap.id });
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <>
      {product ? (
        <div className="detail-warp">
          {/* <Link to={`/`} className="arrow">
          <BackArrow />
          </ Link> */}
          {/* <nav className="clean">
            <div className="nav-wrapper">
              <div className="col s12">
                <a href="#!" className="breadcrumb">
                  Tienda
                </a>
                <a href="#!" className="breadcrumb">
                  Categoria
                </a>
                <a href="#!" className="breadcrumb">
                  Producto
                </a>
              </div>
            </div>
          </nav> */}
          <div className="detail-container">
            <div className="detail-description">
              <h2 className="title">{product.name}</h2>
              <p className="product-description">{product.longDescription}</p>
              <div className="price-container">
                <p className="card-price">{product.price} USD</p>
                <button
                  className="default-button buttton-1"
                  onClick={() => handleAddToCart(product)}
                >
                  <span>Es para mi!</span>
                </button>
              </div>
            </div>
            <div className="detail-image">
              {product.image && <img src={product.image} alt={product.name} />}
            </div>
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
