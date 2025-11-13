const vitoria = Number(prompt("Quantos jogos seu time venceu"));
const empate = Number(prompt("Quantos jogos seu time empatou"));

const pontos = (vitoria * 3) + empate;

if (pontos)
    document.write(pontos)