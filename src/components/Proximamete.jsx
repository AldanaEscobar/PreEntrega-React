import "../styles/itemlist.css"
import "../styles/counter.css"
import { Link } from "react-router-dom"

const Proximamente = () => {
  return (
    <div>
      <h2 className="title center">Proximamente!</h2>
      <Link className="center link-button" to={`/`}><span>Voler a la pagina de inicio</span></Link>   
    </div>
  )
}

export default Proximamente
