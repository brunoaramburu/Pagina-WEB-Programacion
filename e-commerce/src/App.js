import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="app">
          <header>

            <div>
              <nav>
                <a href="Nav/ingresa.html">Inicia Sesion</a>
                <a href="index.html">Principal</a>
                <a target="_blank" href="Nav/ingresa.html">Mi Cuenta</a>
              </nav>
            </div>
            <section className="slogan">
              <h1>Los mejores productos</h1>
              <h2>a un click de distancia</h2>
            </section>
            {/*<div className="wave" style="height: 150px; overflow: hidden;">*/}
            {/*  <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">*/}
            {/*    <path d="M0.00,49.98 C112.02,183.06 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"*/}
            {/*          style="stroke: none; fill: #fff;"></path>*/}
            {/*  </svg>*/}
            {/*</div>*/}
          </header>
        <section className="contenedorcategorias">
          <h2 className="titulo">Categorías</h2>
          <div className="categorias-img">
            <div className="icono-1">
              <img src="img/Deportes.png" alt="Categoria Deportes"/>
                <div>
                  <a href="deportes.html">
                    <h4>Deportes</h4>
                  </a>
                </div>
            </div>
            <div className="icono-2">
              <img src="img/Indumentaria.png" alt="Categoria Indumentaria"/>
                <div>
                  <a href="indumentaria.html">
                    <h4>Indumentaria</h4>
                  </a>
                </div>
            </div>
            <div className="icono-3">
              <img src="img/Electronica.png" alt="Categoria Electronica"/>
                <div>
                  <a href="electronica.html">
                    <h4>Electronica</h4>
                  </a>
                </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
