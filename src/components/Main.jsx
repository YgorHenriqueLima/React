import { useState } from 'react';

import Dados from './Dados';
import paisagem1 from './imgs/paisagem-1.jpg';
import paisagem2 from './imgs/paisagem-2.jpg';
import './estilos/main.css';
import Numero from './Numero';

export default function Main(){
    const cnl = () => {
        return "CFB cursos";
    }
    const ytb = "www.youtube.com";
    const crs = "curso de react";
    
    const somar = (v1, v2) => {
        return v1 + v2;
    }

    const [num, setNum] = useState(10);

    return(
        <main>  
            <img src={paisagem1} alt="paisagem1"/>
            <img src={paisagem2} alt="paisagem2"/>
            <Dados canal={cnl} youtube={ytb} curso={crs} somar={somar}/>
            <Numero num={num} setNum={setNum}/>
        </main>
    );
}
