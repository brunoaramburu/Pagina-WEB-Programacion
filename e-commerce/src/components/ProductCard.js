import productimg from "../img/nophoto.png";
import {Link} from "react-router-dom";
import "./Productos.css"


function ProductosCard ({productos}) {

  return (
    <div className="card-container-custom">
      <div className="card">
        <img src={productimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{productos.name}</h5>
          <p className="card-text">
           ${productos.price}
          </p>
          <div>
          <Link to={`/main/productos/editar/${productos.id}`}><a className="btn-primary">EDITAR</a></Link>
          </div>
          <div>
          <Link to={`/main/productos/eliminar/${productos.id}`}><a className="btn-primary">ELIMINAR</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductosCard