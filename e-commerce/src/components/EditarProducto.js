import {useState, useEffect} from "react";
import {httpGet, httpPut} from "../utils/httpFunctions";
import {Link} from "react-router-dom";
import {useParams} from 'react-router-dom';
import './navbar/Navbar.css';

function EditarProducto(props) {
const {id} = useParams()
const [name, setName] = useState([])
const [price, setPrice] = useState([])
const [productos, setProductos] = useState([])

console.log({id})

const fetchProductos = () => {
    httpGet('api/productos/')
        .then((res) => setProductos(res.data))
 }

 const editProductos = (e) => {
    e.preventDefault()
     httpPut(`api/productos/${id}/`, {name: name, price: price})
         .then(fetchProductos)
    }

useEffect(fetchProductos, [])

 return (
            <div className='general'>
            <div className="navbar">
               <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
               <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
               <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
               <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
             </div>
             <div className="main-div">
               <h1 className="h2title">Editar el producto </h1>
             </div>
             <div className="main-div">
               <form onSubmit={editProductos}>
                 <fieldset>

                   <div className="mb-3">
                     <label htmlFor="disabledTextInput" className="form-label">Nombre</label>
                     <input type="text" id="disabledTextInput" className="form-control" value={name}
                            onChange={(e) => setName(e.target.value) }/>
                   </div>
                   <div className="mb-3">
                     <label htmlFor="disabledTextInput" className="form-label">Precio</label>
                     <input type="text" id="disabledTextInput" className="form-control" value={price}
                            onChange={(e) => setPrice(e.target.value) }
                     />
                   </div>

                   <button type="submit" className="btn btn-primary">EDITAR PRODUCTO</button>
                   <Link to={'/main/productos'}><h4 className="navbar-element">Volver</h4></Link>

                 </fieldset>
               </form>
             </div>
           </div>)
 }

export default EditarProducto