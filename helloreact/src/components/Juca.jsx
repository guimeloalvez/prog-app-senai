import './Juca.css'
import { useState } from 'react';

function Juca() {
    const[saida, setSaida] = useState(0)

    function verificarPreco() {
        let qtd = Number(prompt('Quantas maçãs o Juca va levar?')) 
        let preco

        if(qtd < 12) {
            preco = 0.30;
        } else {
            preco = 0.25;
        }

        let valor = qtd * preco
        // alert(`Valor: R$${valor.toFixed(2)}`)
        setSaida(`Valor: R$${valor.toFixed(2)}.`)
    }
    return (
        <div className={"container-juca"}>
            <h2>Feira do mano Juca</h2>
            <p>
                Resultado: {saida}
            </p>
            <button onClick={verificarPreco}>Calcular</button>
        </div>
    )
}

export default Juca
