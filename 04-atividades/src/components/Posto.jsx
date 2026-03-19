import { useState } from 'react'

function Posto() {

    const [inputCodigo, setInputCodigo] = useState('')
    const [resultado, setResultado] = useState('')
    
    const [alcool, setAlcool] = useState(0)
    const [gasolina, setGasolina] = useState(0)
    const [diesel, setDiesel] = useState(0)

    function registrar() {
        const codigo = parseInt(inputCodigo)

        if (codigo === 1) {
            setAlcool(alcool + 1)
        } else if (codigo === 2) {
            setGasolina(gasolina + 1)
        } else if (codigo === 3) {
            setDiesel(diesel + 1)
        } else if (codigo === 4) {
            let texto = 'MUITO OBRIGADO\n'
            texto += `Alcool: ${alcool}\n`
            texto += `Gasolina: ${gasolina}\n`
            texto += `Diesel: ${diesel}`
            setResultado(texto)
        } else {
            // Se for inválido (como 8 ou 7 do exemplo), apenas limpa o input
        }

        setInputCodigo('')
    }

    return (
        <div>
            <h1>Posto de Combustível</h1>
            <h2>
                1. Alcool  <br />
                2. Gasolina <br />
                3. Diesel <br />
                4. Fim <br />
            </h2>
            <input type='number'
                value={inputCodigo}
                onChange={(e) => setInputCodigo(e.target.value)}
                placeholder='Código (1 a 4)'
            />
            <div className='.input-posto'/>
            <button onClick={registrar}>Enviar</button>

            <p style={{ whiteSpace: 'pre-line' }}>{resultado}</p>
        </div>
    )
}

export default Posto