import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pneu from './components/Pneu.jsx';
import Hohoho from './components/Hohoho';
import Media from './components/Media';
import Bondinho from './components/Bondinho';

function App() {

  return (
    <>
    <Bondinho />
    <Media />
    <Hohoho />
    <Pneu />
    </>
  )
}

export default App
