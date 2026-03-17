import { useState } from 'react'

function Hohoho() {
    const [saida, setSaida] = useState('')
    const [resultado, setResultado] = useState('')

    function mostrar() {
        let textoFinal = "";
        const n = Number(saida);

        if (n > 100) {
            setResultado("Vai crashar a página não safado!");
            return;
        }

        for (let i = 0; i < n; i++) {
            if (i > 0) {
                textoFinal = textoFinal + " ";
            }
            textoFinal = textoFinal + "Ho";
        }

        if (n > 0) {
            textoFinal = textoFinal + "!";
        }

        setResultado(textoFinal);
    }

    return (
        <div>
            <h1>Papai Noel</h1>
            <input 
                type="number" 
                value={saida} 
                onChange={(e) => setSaida(e.target.value)}
                placeholder='Quantos "hos" deseja?' 
            />
            <div className='.input-papainoel'/>
            <button onClick={mostrar}>Ho Ho Ho!</button>

            <p>{resultado}</p>
        </div>
    )
}

export default Hohoho