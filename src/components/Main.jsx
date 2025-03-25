
import paisagem1 from './imgs/paisagem-1.jpg';
import paisagem2 from './imgs/paisagem-2.jpg';
import './estilos/main.css';

export default function Main(){

    return(
        <main>  
            <img src={paisagem1} alt="paisagem1"/>
            <img src={paisagem2} alt="paisagem2"/>
        </main>
    );
}
