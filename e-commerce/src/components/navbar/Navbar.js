import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
      <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
      <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
      <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
    </div>
  )
}

export default Navbar;