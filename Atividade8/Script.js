var opcoes = ["Pedra", "Papel", "Tesoura"];
var escolhaUsuario = prompt("Escolha Pedra, Papel ou Tesoura:");
var escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

if (escolhaUsuario === escolhaComputador) {
  console.log("Empate!");
} else if ((escolhaUsuario === "Pedra" && escolhaComputador === "Tesoura") || 
           (escolhaUsuario === "Tesoura" && escolhaComputador === "Papel") || 
           (escolhaUsuario === "Papel" && escolhaComputador === "Pedra")) {
  console.log("Você ganhou! Você escolheu " + escolhaUsuario + " e o computador escolheu " + escolhaComputador);
} else {
  console.log("Você perdeu! Você escolheu " + escolhaUsuario + " e o computador escolheu " + escolhaComputador);
}
