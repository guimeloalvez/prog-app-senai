import './Voto.css'

function Voto() {

    function verificarIdade() {
        let idade = Number(prompt("Digite sua idade:"))

        if(isNaN(idade)) {
            alert('Digita namoral ai mano')
            return;
        }

        if(idade < 16) {
            alert('Não pode votar')
        } else if (idade == 16 || idade == 17 || idade > 65) {
            alert('Voto facultativo')
        } else  if(idade >= 18 && idade <= 65) {
            alert("Voto obrigatório")
        }
    }
    return (
        <div className={"container-voto"}>
            <h2>Idade para votar</h2>
            <button onClick={verificarIdade}>Processar idade</button>
        </div>
    )
}

export default Voto
