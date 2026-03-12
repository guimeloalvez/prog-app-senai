import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pneu from './components/Messi';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Pneu />
    </>
  )
}

export default App
