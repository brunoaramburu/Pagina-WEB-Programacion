import {useEffect, useState} from "react";
import {httpGet} from "../utils/httpFunctions";
import {Link} from "react-router-dom";
import './navbar/Navbar.css';

const MisCompras = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    httpGet('api/me/').then((res) => setUserData(res.data))
  }, [])

  return (
  <div>
    <div className="navbar">
      <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
      <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
      <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
      <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
    </div>
    <h2 className="h2title">Mi carrito</h2>
    <h3 className="h2title">aca se van a ver las compras realizadas por el usuario {userData.username}</h3>
  </div>
  )
}

export default MisCompras
