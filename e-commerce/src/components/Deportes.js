import imgBasket from '../img/basket.jpeg'
import imgTenis from '../img/tenis.jpeg'
import imgFutbol from '../img/futbol.jpeg'
const Deportes = () => {
    return (
            <main>
                       <section>
                           <h2 class="titulo">Deportes</h2>
                           <div>
                               <div>
                                   <img src={ imgFutbol } class="picture"/>
                               </div>
                               <a href="#">
                                   <h2 class="h2title">Combo 3 Pelotas Nike</h2>
                               </a>
                               <h3 class="price">$5.500</h3>
                           </div>

                           <div>
                               <div class="row-image-desc">
                                   <img src={ imgBasket } class="picture"/>
                               </div>
                               <a href="#">
                                   <h2 class="h2title">Pelota de Basquet Wilson</h2>
                               </a>
                               <h3 class="price">$2.500</h3>
                           </div>

                           <div class="content-3">
                               <div class="row-image-desc">
                                   <img src={ imgTenis } class="picture"/>
                               </div>
                               <a href="#">
                                   <h2 class="h2title">Raqueta Wilson + Pelota</h2>
                               </a>
                               <h3 class="price">$2.350</h3>
                           </div>



                       </section>
                   </main>
            );
}
export default Deportes