import "../styles/itemlist.css"
import "../styles/counter.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h2 className="title center">Page not found</h2>
      <Link className="center link-button" to={`/`}><span>Voler a la pagina de inicio</span></Link>   
    </div>
  )
}

export default NotFound
