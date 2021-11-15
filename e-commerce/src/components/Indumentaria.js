import imgRemera from '../img/remera.jpeg'
import imgBuzo from '../img/buzo.jpeg'
import imgZapatilla from '../img/zapatilla.jpeg'
const Indumentaria = () => {
    return (
            <main>
                <section>
                    <h2 class="titulo">Indumentaria</h2>
                    <div class="content-1">
                        <div class="row-image-desc">
                            <img src={ imgRemera } class="picture"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Remera Hombre-talles L/XL/XXL </h2>
                        </a>
                        <h3 class="price">$1.500</h3>
                    </div>

                    <div class="content-2">
                        <div class="row-image-desc">
                            <img src={ imgZapatilla } class="picture2"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Zapatillas Vans Rojas-talles del 38 al 42</h2>
                        </a>
                        <h3 class="price">$7.500</h3>
                    </div>

                    <div class="content-3">
                        <div class="row-image-desc">
                            <img src={ imgBuzo } class="picture3"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Buzo 705-talles L/XL</h2>
                        </a>
                        <h3 class="price">$2.800</h3>
                    </div>



                </section>
            </main>

    );
}
export default Indumentaria