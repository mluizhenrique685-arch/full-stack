const vitoria = Number(prompt("Quantos jogos seu time venceu"));
const empate = Number(prompt("Quantos jogos seu time empatou"));

const pontos = (vitoria * 3) + empate;


function mostra(mensagem){

document.write(mensagem + pontos);

}

if (pontos > 10){

  mostra ("Seu time está indo bem");

  }
else if (pontos < 5){
 
  mostra ("Seu time precisa melhorar");

}
mostra()