import { useState, useEffect } from "react";

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {setHoraAtual(new Date());}, 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <h1>{horaAtual.toLocaleTimeString()}</h1>
  );
}

export default Relogio;