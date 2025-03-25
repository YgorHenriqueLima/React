
export default function Numero(props){
    return(
        <>
            <p>valor do state num: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>CALCULAR</button>
        </>
    )
}