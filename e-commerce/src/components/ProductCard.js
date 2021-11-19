import productimg from "../img/nophoto.png";
import {Link} from "react-router-dom";


function ProductCard ({product}) {

  return (
    <div className="card-container-custom">
      <div className="card">
        <img src={productimg} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">
            {product.price}
          </p>
          <div>
          <Link to={`/main/productos/editar/${product.name}`}><a className="btn btn-primary">EDITAR</a></Link>
          </div>
          <div>
          <Link to={`/main/productos/eliminar/${product.name}`}><a className="btn btn-primary">ELIMINAR</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductCard