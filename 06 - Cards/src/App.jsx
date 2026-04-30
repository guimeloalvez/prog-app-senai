import { useState } from 'react'
import './App.css'
import CardProduto from './components/CardProduto';

function App() {
  const [produtos, setProdutos] = useState([
      {
        id: 01,
        nome: 'Vinil Album Off The Wall',
        preco: 499.99,
        imagem: '📀',
      },
      {
        id: 02,
        nome: 'Vinil Album BELOVED',
        preco: 249.90,
        imagem: '💿',
      },
      {
        id: 03,
        nome: 'Vinil Album BLOND',
        preco: 299.99,
        imagem: '💿',
      }
    ]
  )

  function cadastrar() {
    let produtoNovo = { id: Date.now(), nome: 'Vinil Album Invencible', preco: 699.99, imagem: '💿', }
    setProdutos([...produtos, produtoNovo])
  }
  return (
    <div>
      <h1 className='h1-card'>Card de Vinis</h1>
      <button onClick={cadastrar}>+</button>
      <div className="listaCards">
      {
        produtos.map((produto) => (
          <CardProduto p={produto} key={produto.id}/>
          ))
        }
        </div>
    </div>
  )
}

export default App