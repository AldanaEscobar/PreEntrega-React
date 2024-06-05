import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
import "../../styles/itemlist.css";
import "../../styles/counter.css";

const Item = ({ product }) => {
  return (
    <>
    <Link to={`/item/${product.id}`}>
      <div className="card" key={product.id}>
        <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        {/* <p className="card-price"> {product.price} USD</p> */}
        </div>
        {product.image && <img src={product.image} alt={product.name} />}
        <div className="button-container">
        <p className="card-description">{product.description}</p>
          {/* <Link className="default-button buttton-1" to={`/item/${product.id}`}>
            <span>Ver mas</span>
          </Link> */}
        </div>
      </div>
      </Link>
    </>
  );
};

export default Item;
