import {useEffect, useState} from "react";
import {httpGet, httpDelete} from "../utils/httpFunctions";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import './navbar/Navbar.css';

function EliminarProducto(props) {

  const {id} = useParams()
  const [productos, setProductos] = useState([])


    const fetchProductos = () => {
       httpGet('api/productos/')
         .then((res) => setProductos(res.data))
     }

     const eliminarProductos = () => {
       httpDelete(`api/productos/${id}/`)
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
               <h1 className="h2title">Eliminar el producto</h1>
             </div>
             <div className="main-div">
               <form onSubmit={eliminarProductos}>
                 <fieldset>
                   <button type="submit" className="btn btn-primary">ELIMINAR PRODUCTO</button>
                   <Link to={'/main/productos'}><h4 className="navbar-element">Volver</h4></Link>

                 </fieldset>
               </form>
             </div>
           </div>)
 }

export default EliminarProducto