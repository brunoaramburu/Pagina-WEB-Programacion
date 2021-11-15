import {Link} from "react-router-dom";
import imgIndumentaria from '../img/Indumentaria.png'
import imgDeportes from '../img/Deportes.png'
import imgElectronica from '../img/Electronica.png'
import Logo from '../img/logo.png'

const Inicio = () => {
    return (
          <div className="app">

              <header>
                <section className="slogan">
                  <h1>Los mejores productos</h1>
                  <h2>a un click de distancia</h2>
                </section>
              <div className="logo">
              <img src={ Logo } />
              </div>
              </header>
            <section className="contenedorcategorias">
              <h2 className="titulo">Categorías</h2>
              <div className="categorias-img">
                <div className="icono-1">
                  <img src={ imgDeportes } alt="Categoria Deportes"/>
                    <div>
                      <Link to={'/main/deportes'}><h4 className="titulo">Deportes</h4></Link>
                    </div>
                </div>
                <div className="icono-2">
                  <img src={ imgIndumentaria } alt="Categoria Indumentaria"/>
                    <div>
                       <Link to={'/main/indumentaria'}><h4 className="titulo">Indumentaria</h4></Link>
                    </div>
                </div>
                <div className="icono-3">
                  <img src={ imgElectronica } alt="Categoria Electronica"/>
                    <div>
                       <Link to={'/main/electronica'}><h4 className="titulo">Electronica</h4></Link>
                    </div>
                </div>
              </div>
            </section>
        </div>
      );

}
export default Inicio