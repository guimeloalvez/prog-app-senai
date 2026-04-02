import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './../src/App.css'
import Churrascaria from './pages/Churrascaria';
import Taberna from './pages/Taberna';
import Coxao from './pages/Coxao';

function App() {
  const [tela, setTela] = useState(<Churrascaria />)

  return (
    <>
      <div className='cont-app'>
        <header className={'cont-header'}>
          <nav>
            <button className={'botoes-nav'} onClick={() => setTela(<Churrascaria />)}>Home</button>
            <button className={'botoes-nav'} onClick={() => setTela(<Taberna />)}>Taberna</button>
            <button className={'botoes-nav'} onClick={() => setTela(<Coxao />)}>Coxao</button>
          </nav>
        </header>
        <main className={'cont-main'}>
          {tela}
        </main>
      </div>
    </>
  )
}

export default App
