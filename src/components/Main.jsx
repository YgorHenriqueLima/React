import './App.css';
import paisagem1 from './imgs/paisagem-1.jpg';
import paisagem2 from './imgs/paisagem-2.jpg';

export default function Main(){

    const canal = ()=>{
        return("cfb cursos");
    }
    
    const curso = "Curso de React";
    
    return(
        <main className='conteudo'>  
            <img src={paisagem1} alt="paisagem1"/>
            <img src={paisagem2} alt="paisagem2"/>
            <p>canal {canal()}</p>
            <p>fazendo o {curso}</p>       
        </main>
    )
}