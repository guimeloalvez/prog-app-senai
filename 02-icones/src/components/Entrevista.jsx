import { useState } from 'react'

function Entrevista() {
    const[saida, setSaida] = useState(0)

    function calcularTabuada() {
        let numero = Number(prompt('Qual número você deseja ver a tabuada?'))
        let resultado = 0;
        let tabuada = "";

        for(let i = 0; i <= 10; i++) {
            resultado = i * numero
            tabuada += `${numero} x ${i} = ${resultado} | `
        }

        setSaida(tabuada)
    }
    return (
        <div>
            <h2>Tabuada</h2>
            <button onClick={calcularTabuada}>
            <img src="./icones/calculator1.svg" alt="Calculadora azul" />
            Calcular tabuada
            </button>
            <p>Tábuada: {saida}</p>
        </div>
    )
}

export default Entrevista
