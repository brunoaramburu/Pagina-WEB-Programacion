import {useEffect, useState} from "react";
import {httpGet, httpPut} from "../utils/httpFunctions";
import {Link} from "react-router-dom";

const EditarProducto= () => {

  const [productos, setProductos] = useState([])

  const [name, setName] = useState([])
  const [price, setPrice] = useState([])


    const fetchProductos = () => {
       httpGet('api/productos/10/')
         .then((res) => setProductos(res.data))
     }

     const editProductos = () => {
       httpPut('api/productos/10/', { name: name, price: price})
         .then(fetchProductos)
     }

    useEffect(fetchProductos, [])

  return (<div className='general'>
             <div className="main-div">
               <h1 className="custom-title">Editar el producto {productos.name}</h1>
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