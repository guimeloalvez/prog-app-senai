import './Paginas.css'

function Churrascaria() {
  return (
    <div className='cont-churrascaria'>
      <img src="/churras.jpg" alt="Churrascaria do Gaúcho" className="img-food" />
      
      <h1>Churrascaria do Gaúcho</h1>
      <h3>Proprietário: Gildo Teixeira Fagundes Filho (Seu Gildão)</h3>
      
      <div className="card-info">
        <p>Atendimento carinhoso do "ô Gaúcho" para todos os clientes.</p>
        <h4>Nosso Cardápio:</h4>
        <ul>
          <li>Costela no fogo de chão</li>
        </ul>
        <h4>Bebidas:</h4>
        <p>Pepsi e Cerveja Polar</p>
      </div>
    </div>
  )
}

export default Churrascaria
