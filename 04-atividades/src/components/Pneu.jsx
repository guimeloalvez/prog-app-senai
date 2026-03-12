import { useState } from 'react'

function Pneu() {
    const[inputDesejado, setinputDesejado] = useState('')
    const[inputLido, setinputLido] = useState('')
    const[resultado, setResultado] = useState('')

    function calcularPressao() {
        let resultado = inputDesejado - inputLido

        setResultado(resultado)
    }
    return (
        <div>
            <h1>Pressão</h1>
            Pressão desejada: <input type="text"
            value={inputDesejado}
            onChange={(e) => setinputDesejado(e.target.value)}
            />

            <div clasName="input-container">
            Pressão lida: <input type="text"
            value={inputLido}
            onChange={(e) => setinputLido(e.target.value)}
            />
            </div>
            <h3></h3>
            <button onClick={calcularPressao}>Resultado</button>

            <p>Resultado: {resultado}</p>
            
        </div>
    )
}

export default Pneu
