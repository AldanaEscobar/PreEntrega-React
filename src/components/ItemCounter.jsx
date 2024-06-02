import { useState } from "react"
import '../styles/counter.css'

export const ItemCounter = () => {
  let [numberItem, setNumberItem] = useState(0)
  function increment () {
    setNumberItem(numberItem + 1);
  }

  function decrement () {
    setNumberItem(numberItem - 1);
  }

  return (
   <div className="counter">
    <div className="counter-text">Quiero {numberItem} guias!</div>
    <div className="button-container">
     <button onClick={increment} className="counter-button">+</button>
     <button onClick={decrement} className="counter-button">-</button>
     </div>
   </div>
  )
}

export default ItemCounter
