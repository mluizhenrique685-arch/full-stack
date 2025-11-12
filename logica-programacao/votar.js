let idade = Number(prompt("Digite sua idade"));

if (idade < 16){
    alert("Não pode votar");
}
else if(idade >= 16 && idade < 18) {
    alert("Voto opcional");
}
 else {
    alert("Voto obrigatorio");
 }