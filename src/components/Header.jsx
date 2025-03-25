import Relogio from './Relogio';
import './estilos/header.css';

export default function Header(){
    const textoDestaque = {
        color: '#0ad9',
        fontSize: '3em',
    }

    return (
        <header>
            <Relogio/>
            <h1 style={textoDestaque}>Site interativo</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Notícias</a>
                <a href="#">Esportes</a>
                <a href="#">Sobre nós</a>
                <a href="#">Login</a>
                <a href="">Cadastro</a>
            </nav>
        </header>
    )
}