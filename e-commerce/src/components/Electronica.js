import imgHeladera from '../img/heladera.jpeg'
import imgMicroondas from '../img/microondas.jpeg'
import imgIphone from '../img/iphone.jpeg'
const Electronica = () => {
    return (
            <main>
                <section>
                    <h2 class="titulo">Electronica</h2>
                    <div class="content-1">
                        <div class="row-image-desc">
                            <img src={ imgIphone } class="picture"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Iphone 5s 32gb</h2>
                        </a>
                        <h3 class="price">$80.555</h3>
                    </div>

                    <div class="content-2">
                        <div class="row-image-desc">
                            <img src={ imgHeladera } class="picture2"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Heladera Whirlpool Wrw52k1 429lts</h2>
                        </a>
                        <h3 class="price">$65.500</h3>
                    </div>

                    <div class="content-3">
                        <div class="row-image-desc">
                            <img src={ imgMicroondas } class="picture3"/>
                        </div>
                        <a href="#">
                            <h2 class="h2title">Microondas Invert NN-SD985S</h2>
                        </a>
                        <h3 class="price">$9.999</h3>
                    </div>



                </section>
            </main>
    );
}
export default Electronica