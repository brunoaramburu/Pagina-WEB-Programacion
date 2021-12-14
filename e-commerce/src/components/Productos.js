import '../components/Productos.css'
import ProductCard from "./ProductCard";
import {useEffect, useState} from "react";
import {httpGet, httpPost} from "../utils/httpFunctions";
import {Link, useParams, useLocation} from "react-router-dom";
import './navbar/Navbar.css';


const Productos = () => {


  const [productos, setProductos] = useState([])

  const [name, setName] = useState([])
  const [price, setPrice] = useState([])

  const fetchProductos = () => {
    httpGet('api/productos/')
      .then((res) => setProductos(res.data))
  }

  const createProductos = () => {
    httpPost('api/productos/', { name: name, price: price})
      .then(fetchProductos)
  }

  useEffect(fetchProductos, [])

  return (<div className='general'>
    <div className="navbar">
       <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
      <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
      <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
       <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
    </div>
    <div className="main-div">
      <h1 className="h2title">Todos los productos</h1>
      <div>
      <input placeholder="Busqueda por Nombre"/>
      <button type="submit">Buscar</button>
      <Link to={'/main/productos/busqueda'}><h5>QueryParams</h5></Link>
      </div>
    </div>
    <div className="main-div2">
      <form onSubmit={createProductos}>
        <fieldset>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">Nombre:</label>
            <input type="text" id="disabledTextInput" className="form-control" value={name}
                   onChange={(e) => setName(e.target.value) }/>
          </div>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label2">Precio:</label>
            <input type="text" id="disabledTextInput" className="form-control2" value={price}
                   onChange={(e) => setPrice(e.target.value) }
            />
          </div>
          <button type="submit" className="btn-primary">PUBLICAR PRODUCTO</button>
        </fieldset>
      </form>
    </div>
    <div className="all-cards">
      {
        productos
          .map((mapProductos) => {
            return (
              <ProductCard productos={mapProductos}/>
            )
          })
      }
    </div>
  </div>)
}

export default Productos