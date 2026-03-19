import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pneu from './components/Pneu.jsx';
import Hohoho from './components/Hohoho';
import Media from './components/Media';
import Bondinho from './components/Bondinho';
import Pum from './components/Pum';
import Posto from './components/Posto';

function App() {

  return (
    <>
    <Posto />
    <Pum />
    <Bondinho />
    <Media />
    <Hohoho />
    <Pneu />
    </>
  )
}

export default App
