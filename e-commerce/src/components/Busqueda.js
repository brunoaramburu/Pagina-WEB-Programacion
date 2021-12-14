import '../components/Productos.css'
import ProductCard from "./ProductCard";
import React from "react"
import axios from "axios";
import {useEffect, useState} from "react";
import {httpGet, httpPut} from "../utils/httpFunctions";
import {Link, useHistory} from "react-router-dom";
import './navbar/Navbar.css';


const BusquedaPage = () => {

    // const queryString = window.location.search;
    const [name, setName] = useState([])
    // const urlParams = new URLSearchParams(queryString);
    // const history = useHistory();
    // const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState([])

    console.log("probando el valor", busqueda)

    const fetchProductosFilter = () => {
        httpGet(`api/productos_filter/?name=${busqueda}/`)
            .then((res) => setName(res.data))
    }

    const search = (e) => {
        httpPut(`api/productos_filter/?name=${busqueda}/`, {name: name})
            .then(fetchProductosFilter)
    }
    search();

    const fetch = async () => {
        try {
            const getNombre = axios.get(`http://localhost:8000/api/productos_filter/?name=${name}`);
            const responses = await axios.all([getNombre]);
        } catch (err) {
            console.error(err);
        }
    };
    fetch();

    useEffect(fetchProductosFilter, [])
    useEffect(fetch, [])

    return (<div className='general'>
        <div className="navbar">
            <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
            <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
            <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
            <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
        </div>
        <div className="main-div">
            <h1 className="h2title">Todos los productos</h1>
            <form onSubmit={search}>
            <div>
                <input id="busqueda" type="text" value={busqueda}
                       onChange={(e) => setBusqueda(e.target.value) }/>
                <button type="submit">Buscar</button>
            </div>
            </form>
        </div>
        <div className="all-cards">
            <article>
                {name.map((el) => (
                    <div key={el.name}>
                        <Link to={`/main/productos/busqueda?name=${el.name}`}>
                            <h2>{el.name}</h2>
                        </Link>
                    </div>
                ))}
            </article>
        </div>
    </div>)
}
export default BusquedaPage;
