
import './estilos/header.css';

export default function Header(){

    return (
        <div id='container-header'>    
            <header>
              <a href="#"><h1>DestinoPerfeito</h1></a>
            </header>
            <nav>
                <a href="#">
                    <span class="material-symbols-outlined">
                        trip
                    </span>
                    Pacotes
                </a>

                <a href="#">
                    <span class="material-symbols-outlined">
                        travel
                    </span>
                    Passagens
                </a>

                <a href="#">
                    <span class="material-symbols-outlined">
                        hotel
                    </span>
                    Hotéis
                </a>

                <a href="#">
                    <span class="material-symbols-outlined">
                        directions_boat
                    </span>
                    Cruzeiros
                </a>

                <a href="#">
                    <span class="material-symbols-outlined">
                        directions_car
                    </span>
                    carros
                </a>

                <a href="#">
                    <span class="material-symbols-outlined">
                        directions_bus
                    </span>
                    ônibus
                </a>
            </nav>
        </div>
    )
}