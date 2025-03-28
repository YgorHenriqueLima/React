
import './estilos/header.css';
import Menu from './Menu';

export default function Header(){

    return (
        <div id='container-header'>    
            <header>
              <a href="#"><h1>DestinoPerfeito</h1></a>
            </header>
            <Menu/>
        </div>
    )
}