import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './../src/App.css'
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';

function App() {
  const [tela, setTela] = useState(<Home />)

  return (
    <>
      <div className='cont-app'>
        <header className={'cont-header'}>
          <nav>
            <button className={'botoes-nav'} onClick={() => setTela(<Home />)}>Home</button>
            <button className={'botoes-nav'} onClick={() => setTela(<Produtos />)}>Produtos</button>
            <button className={'botoes-nav'} onClick={() => setTela(<Contato />)}>Contato</button>
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
