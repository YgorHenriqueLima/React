export default function Dados(props){
    const n1 = 10;
    const n2 = 5;
    return(
        <section>
            <p>Canal: <strong>{props.canal()}</strong></p>
            <p>youtube: <strong>{props.youtube}</strong></p>
            <p>curso: <strong>{props.curso}</strong></p>
            <p>a soma de {n1} e {n2} é igual a <strong>{props.somar(n1,n2)}</strong></p>
        </section>
    )
}