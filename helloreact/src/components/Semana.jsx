function Semana() {

    function verificarDia(){
        let dia = Number(prompt("Digite o dia da semana (1 a 7):"))

        switch(dia){
            case 1: alert("Domingo") 
            break;
            case 2: alert("Segunda")
            break;
            case 3: alert("Terça")
            break;
            case 4: alert("Quarta")
            break;
            case 5: alert("Quinta")
            break;
            case 6: alert("Sexta")
            break;
            case 7: alert("Sábado")
            break;
            default: alert("Digita namoral ai mano")
        }
    }

    return (
        <div>
            <h2>Dia da Semana</h2>
            <button onClick={verificarDia}>Veificar dia</button>
        </div>
    )
}

export default Semana
