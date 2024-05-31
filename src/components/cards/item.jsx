/* eslint-disable react/prop-types */
import "../../styles/itemlist.css";
import "../../styles/counter.css";

const Item = ({ product }) => {
  return (
    <>
      {/* {product.length > 0 ? (
        product.map((product) => { */}
      {/* return (
            <> */}
      <div className="card" key={product.id}>
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price"> {product.price} USD</p>
        {product.image && <img src={product.image} alt={product.name} />}
        <div className="button-container">
          <button className="counter-button">Ver mas</button>
        </div>
      </div>
    </>
  );
};

export default Item;
