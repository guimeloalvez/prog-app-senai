import { useState } from 'react'

function Copias() {

    const [saida, setSaida] = useState(0)

    function calcularCopias() {
        let qtd = Number(prompt('Quantas cópias?'))
        let preco = 0.33
        let msg = ''
        let resultado = 0

        for(let i = 0; i <= 500; i++) {
            resultado = qtd * preco
            msg = `${qtd} cópias é R$${resultado.toFixed(2)}.`
        }

        setSaida(msg)
    }
    return (
        <div>
            <h2>Valor das cópias</h2>
            <button onClick={calcularCopias}>
            <img src='./icones/copies.svg' alt='Cópias de papéis' />
            Calcular
            </button>
            <p>Valor: {saida}</p>
        </div>
    )
}

export default Copias
