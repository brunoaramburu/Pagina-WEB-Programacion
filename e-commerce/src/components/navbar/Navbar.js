import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (<div className="navbar">
    <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
    <Link to={'/main/micuenta'}><h4 className="navbar-element">Mi Cuenta</h4></Link>
    <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis Compras</h4></Link>
  </div>)
}

export default Navbar;