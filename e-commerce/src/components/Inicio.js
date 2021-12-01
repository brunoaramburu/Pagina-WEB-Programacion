import {Link} from "react-router-dom";
import Logo from '../img/logo2.png'
import './navbar/Navbar.css'

const Inicio = () => {
    return (
        <div className="app">
            <header>
                <div className="navbar">
                    <Link to={'/main/inicio'}><h4 className="navbar-element">Inicio</h4></Link>
                    <Link to={'/login'}><h4 className="navbar-element">Iniciar Sesion</h4></Link>
                    <Link to={'/main/profile'}><h4 className="navbar-element">Mi cuenta</h4></Link>
                    <Link to={'/main/miscompras'}><h4 className="navbar-element">Mis compras</h4></Link>
                </div>
                <section className="slogan">
                    <h1>PUBLICA TUS PRODUCTOS</h1>
                    <h2>FACIL Y GRATIS</h2>
                </section>
                <div>
                    <Link to={'/main/productos'}><h4 className="titulo">VER PRODUCTOS</h4></Link>
                </div>
                <div className="logo">
                    <img src={ Logo } />
                </div>
             </header>
         </div>
      );

}
export default Inicio