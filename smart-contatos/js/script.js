const form = document.querySelector("form")
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone")
const listaMsg = document.querySelector(".lista-msg");
form.addEventListener("submit", function(event) {
event.preventDefault();

if(inputNome.value == "" || inputEmail.value == "" || inputTelefone.value == "" ) {
    alert("Digite seus dados");
    return false;

}
if(listaMsg ) {
 listaMsg.remove();
}


const btnExcluir = document.createElement("button");
btnExcluir.textContent = "Excluir";
btnExcluir.className = "btn-delete";



const li = document.createElement("li");

btnExcluir.addEventListener("click", function(){
alert("teste");
});

li.innerHTML = `
  <span class="contato-Nome">${inputNome.value}</span>
  <span class="contato-Email">${inputEmail.value}</span>
  <span class="contato-Telefone">${inputTelefone.value}</span>
`;

console.log(li)
lista.appendChild(li)
li.appendChild(btnExcluir)

form.reset();

});