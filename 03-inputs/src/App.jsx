import { useState } from 'react'
import Evento from './components/Evento.jsx'
import './App.css'

function App() {
  const[inputNome, setinputNome] = useState('')

  function cadastrar(){
    console.log('Cadastrando: ' + inputNome)
  }
  return (
    <>
      <h1>Inputs controlados</h1>
      Nome <input type="text" 
        value={inputNome}
        onChange={(e) => setinputNome(e.target.value)}
      />

      {/* <p>Nome digitado: {inputNome}</p> */}

      <button onClick={cadastrar}>Cadastrar</button>

      <hr/><Evento /><hr/>
    </>
  )
}

export default App