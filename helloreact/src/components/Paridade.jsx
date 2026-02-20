import './Paridade.css'

function Paridade() {

    function calcularParidade() {
        let numero = Number(prompt('Digita um número ai:'))

        if(numero % 2 == 0) {
            alert('Par')
        } else {
            alert('Ímpar')
        }
    }
    return (
        <div className = {"container-paridade"}>
            <h2>Par ou Ímpar?</h2>
            <button onClick={calcularParidade}>Paridade</button> 
        </div>
    )
}

export default Paridade