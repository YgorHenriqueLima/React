import './App.css';
import Dados from './Dados';
import paisagem1 from './imgs/paisagem-1.jpg';
import paisagem2 from './imgs/paisagem-2.jpg';

export default function Main(){
    return(
        <main className='conteudo'>  
            <img src={paisagem1} alt="paisagem1"/>
            <img src={paisagem2} alt="paisagem2"/>
            <Dados canal='CFBcursos' youtube='www.youtube.com' curso='curso de react'/>   
        </main>
    )
}