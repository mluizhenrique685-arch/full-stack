let nota = Number(prompt("Digite a nota do aluno"));

if(nota >= 6){
    alert("Aluno aprovado");
}
else if(nota >= 4 && nota < 6) {
    alert("Aluno em recuperação");
}
    else {
    alert("aluno reprovado");
}