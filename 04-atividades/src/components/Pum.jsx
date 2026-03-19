import { useState } from 'react'

function Pum() {

    const [inputN, setInputN] = useState('')
    const [resultado, setResultado] = useState('')

    function linhas() {

        let texto = ''

        if(resultado > 50) {
            setResultado('Acima de 50 não é permitido.')
            return;
        }

        for (let i = 1; i <= inputN; i++) {
            if(i % 4 != 0) {
                texto += i + ' '
            } else {
                texto += 'PUM\n'
            }
        }

        setResultado(texto)
    }
    return (
        <div>
            <h1>PUM!</h1>
            <input type='number'
            value={inputN}
            onChange={(e) => setInputN(e.target.value)}
            placeholder='Quantas linhas?'
            />
            <div className='.input-pum'/>
            <button onClick={linhas}>PUM!</button>
            <p style={{ whiteSpace: 'pre-line' }}>{resultado}</p>
        </div>
    )
}

export default Pum
