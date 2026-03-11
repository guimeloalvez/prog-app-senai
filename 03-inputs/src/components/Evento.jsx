import React, { useState } from 'react'
import { Input } from 'postcss';

function Evento() {

    const[inputEvento, setInputEvento] = useState('')

    function handleInput(e) {
        setInputEvento(e.target.value)
        console.log(e);
    }
    return (
        <div>
            <h2> Demo de eventos</h2>
            <button onClick={() => console.log()}>
            Evento</button>
            <input type="text"
            value={inputEvento}
            onChange={handleInput}></input>
        </div>
    )
}

export default Evento
