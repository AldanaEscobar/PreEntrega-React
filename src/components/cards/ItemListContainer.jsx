import '../../styles/ItemListContainer.css';

function ItemListContainer({ products }) {
  return (
    <div>
      <h2 className="text center">PROXIMAMENTE!</h2>
      <div className='card'>
      {products}
      </div>
    </div>
  )
}

export default ItemListContainer;
