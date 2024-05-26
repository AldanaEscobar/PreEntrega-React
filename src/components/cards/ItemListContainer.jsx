import '../../styles/ItemListContainer.css';
import ItemList from './itemList';
import '../../styles/itemlist.css';

function ItemListContainer() {
  return (
    <div>
      <h2 className='title'>Guias:</h2>
      <div className='cards'>
      <ItemList />
      </div>
    </div>
  )
}

export default ItemListContainer;
