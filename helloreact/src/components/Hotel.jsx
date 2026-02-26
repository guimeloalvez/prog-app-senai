import './Hotel.css'
import { useState } from 'react'

function Hotel() {
    const[saida, setSaida] = useState(0)

    function verificarPagamento() {
        let diarias = Number(prompt('Quantos dias Juca ficou?'))
        let valorDiaria

        if(diarias <= 5) {
            valorDiaria = 100
        } else if (diarias >= 6 <= 10) {
            valorDiaria = 90
        } else {
            valorDiaria = 80
        }

        let valorBruto = diarias * valorDiaria

        let emocional = valorDiaria * 10/100
        let carteirinha = valorDiaria * 15/100;
        let valorTotal = valorBruto - emocional - carteirinha + 150

        setSaida(`Valor final: ${valorTotal.toFixed(2)}.`)
    }
    return (
        <div className={'container-hotel'}>
            <h2>Hotel</h2>
            <p>
                Resultado: {saida}
            </p>
            <button onClick={verificarPagamento}>Calcular pagamento</button>
        </div>
    )
}

export default Hotel
