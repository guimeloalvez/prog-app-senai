import './Nota.css'

function Nota() {

    function calcularNota() {
        let nota = Number(prompt('Digite a nota:'))

        if(nota > 100 || nota < 0) {
            alert('Digita namoral ai mano')
            return;
        }
        if(nota >= 81) {
            alert('Boa! Nota A')
        } else if(nota >= 61 && nota <= 80) {
            alert('Vamos por mais! Nota B')
        } else if(nota >= 41 && nota <= 60) {
            alert('Pode melhorar! Nota C')
        } else if(nota >= 21 && nota <= 40) {
            alert('Ta mal... Nota D')
        } else {
            alert('Reprovado... Nota E')
        }
    }
    return (
        <div className = {"container-nota"}>
            <h2>Nota</h2>
            <button onClick={calcularNota}>Verificar nota</button>
        </div>
    )
}

export default Nota
