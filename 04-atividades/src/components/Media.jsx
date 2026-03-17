import { useState } from 'react'

function Media() {

    const[nota1, setNota1] = useState('')
    const[nota2, setNota2] = useState('')
    const[resultado, setResultado] = useState('')

    function calcularNota() {
        let n1 = Number(nota1)
        let n2 = Number(nota2)
        let media = (n1 + n2) / 2

        if(nota1 < 0 || nota2 < 0 || nota1 > 10 || nota2 > 10) {
            setResultado('Apenas números de 0 a 10.')
        } else if(media >= 7) {
            setResultado('Aprovado!')
        } else if(media < 7 && media >= 4) {
            setResultado('Recuperação.')
        } else {
            setResultado('Reprovado.')
        }
    }
    return (
        <div>
            <h1>Média</h1>
            <input type='number'
            value={nota1}
            onChange={(e) => setNota1(e.target.value)}
            placeholder='Digite a primeira nota.'
            />

            <div className='.input-media1'/>
            <input type='number'
            value={nota2}
            onChange={(e) => setNota2(e.target.value)}
            placeholder='Digite a segunda nota.'
            />

            <div className='.input-media2'/>
            <button onClick={calcularNota}>Calcular</button>

            <p>{resultado}</p>
        </div>
    )
}

export default Media
