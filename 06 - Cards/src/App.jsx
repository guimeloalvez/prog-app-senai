import { useState } from 'react'
import './App.css'
import CardProduto from './components/CardProduto';

function App() {
  const [produtos, setProdutos] = useState([
    {
      id: 1,
      nome: 'Vinil Album Off The Wall',
      preco: 499.99,
      imagem: 'https://m.media-amazon.com/images/I/812EgYpATnL.jpg',
    },
    {
      id: 2,
      nome: 'Vinil Album BELOVED',
      preco: 249.90,
      imagem: 'https://m.media-amazon.com/images/I/81SqsATvOnL._UF1000,1000_QL80_.jpg',
    }
  ]);

  const [inputImagem, setInputImagem] = useState('')
  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')

  function cadastrar() {
    if (!inputNome || !inputPreco || !inputImagem) return alert("Preencha todos os campos");
    
    let produtoNovo = { 
      id: Date.now(), 
      nome: inputNome, 
      preco: Number(inputPreco), 
      imagem: inputImagem 
    }
    
    setProdutos([...produtos, produtoNovo])
    setInputImagem('')
    setInputNome('')
    setInputPreco('')
  }

  return (
    <div className="container-principal">
      <h1 className='h1-card'>Card de Vinis</h1>

      <div className="cont-form">
        <h1>Cadastro de Vinis</h1>
        <div className="input-container">
          <label>URL da Imagem</label>
          <input type="text" value={inputImagem} onChange={(e) => setInputImagem(e.target.value)} placeholder="http://..." />
        </div>
        <div className="input-container">
          <label>Nome</label>
          <input type="text" value={inputNome} onChange={(e) => setInputNome(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Preço</label>
          <input type="number" value={inputPreco} onChange={(e) => setInputPreco(e.target.value)} />
        </div>
        <button className="btn-cadastro" onClick={cadastrar}>Cadastrar</button>
      </div>

      <div className="listaCards">
        {produtos.map((produto) => (
          <CardProduto p={produto} key={produto.id} />
        ))}
      </div>
    </div>
  )
}

export default App
