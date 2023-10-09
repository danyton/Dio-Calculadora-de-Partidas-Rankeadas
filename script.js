// script.js
function calcularNivel(vitorias, derrotas) {
    // Calcular o saldo de Ranqueadas
    var saldoVitorias = vitorias - derrotas;
    // Inicializar a variável 'nivel' como vazia
    var nivel = "";

    // Utilizar uma estrutura de decisão para determinar o nível
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibir a mensagem com o saldo de Ranqueadas e o nível
    alert("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel);
}
