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
            <input type="text"
            value={inputDesejado}
            onChange={(e) => setinputDesejado(e.target.value)}
            placeholder='Pressão que deseja:'
            />

            <div className="input-container">
            <input type="text"
            value={inputLido}
            onChange={(e) => setinputLido(e.target.value)}
            placeholder='Pressão a ser lida:'
            />
            </div>
            <h3></h3>
            <button onClick={calcularPressao}>Resultado</button>

            <p>{resultado}</p>
            
        </div>
    )
}

export default Pneu
