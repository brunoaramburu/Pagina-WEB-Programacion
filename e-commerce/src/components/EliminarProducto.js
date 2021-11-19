import {useEffect, useState} from "react";
import {httpGet, httpDelete} from "../utils/httpFunctions";
import {Link} from "react-router-dom";

const EliminarProducto= () => {

  const [productos, setProductos] = useState([])


    const fetchProductos = () => {
       httpGet('api/productos/9/')
         .then((res) => setProductos(res.data))
     }

     const eliminarProductos = () => {
       httpDelete('api/productos/9/')
         .then((res) => setProductos(res.data))
     }

    useEffect(fetchProductos, [])

  return (<div className='general'>
             <div className="main-div">
               <h1 className="custom-title">Eliminar el producto {productos.name}</h1>
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