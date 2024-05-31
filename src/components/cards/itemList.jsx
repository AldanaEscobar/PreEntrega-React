/* eslint-disable react/prop-types */

import "../../styles/itemlist.css";
import "../../styles/counter.css";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.length > 0 ? (
        products.map((product) => {
          return <Item key={product.id} product={product} />;
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
