import { useState } from 'react'

function Bondinho() {

    const[alunos, setAlunos] = useState('')
    const[monitores, setMonitores] = useState('')
    const[resultado, setResultado] = useState('')

    function calcular() {

        let a = Number(alunos)
        let m = Number(monitores)
        let peso = a + m
        
        if(peso <= 50) {
            setResultado('Autorizado!')
        } else if(peso > 50) {
            setResultado('Pessoas demais!')
        }
    }
    return (
        <div>
            <h1>Bondinho</h1>
            <input type='number'
            value={alunos}
            onChange={(e) => setAlunos(e.target.value)}
            placeholder='Número de alunos:'
            />
            <div>
                <input type='number'
                value={monitores}
                onChange={(e) => setMonitores(e.target.value)}
                placeholder='Número de monitores:'
                />
            </div>

            <button onClick={calcular}>Pesar</button>

            <p>{resultado}</p>
        </div>
    )
}

export default Bondinho
