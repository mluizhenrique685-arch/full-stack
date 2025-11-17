const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone")

function btnCadastrar(event) {
    event.preventDefault();
    console.log(inputNome.value);
    console.log(inputEmail.value);
    console.log(inputTelefone.value);
}