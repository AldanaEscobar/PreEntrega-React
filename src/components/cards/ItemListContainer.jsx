import '../../styles/ItemListContainer.css';
import ItemCounter from '../ItemCounter';

function ItemListContainer({ products }) {
  return (
    <div>
      <h2 className="text center">PROXIMAMENTE!</h2>
      <div className='card'>
      {products}
      </div>
      <ItemCounter />
    </div>
  )
}

export default ItemListContainer;
