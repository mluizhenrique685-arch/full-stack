const form = document.querySelector("form")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone")
form.addEventListener("submit", function(event) {
event.preventDefault();

if(inputNome.value == "") {
    alert("Não deixe o campo Nome em vazio, digite");
    return false;

}
if(inputEmail.value == "") {
    alert("Não deixe o campo Email em vazio, digite");
    return false;

}
if(inputTelefone.value == "") {
    alert("Não deixe o campo Telefone em vazio, digite");
    return false;

}



console.log("Nome", inputNome.value);
console.log("Email", inputEmail.value);
console.log("Telefone", inputTelefone.value);
});

