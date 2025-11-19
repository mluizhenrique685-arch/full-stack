const form = document.querySelector("form")
const lista = document.querySelector(".lista")
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone")
const inputEndereço = document.getElementById("endereço")
const listaMsg = document.querySelector(".lista-msg");
form.addEventListener("submit", function(event) {
event.preventDefault();

if(inputNome.value == "" || inputEmail.value == "" || inputTelefone.value == "" || inputEndereço == "" ) {
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
  const confirmar = confirm("Tem certeza que deseja excluir o contato?");
 if (confirmar){
  li.remove();

 }

});

li.innerHTML = `
  <span class="contato-Nome">${inputNome.value}</span>
  <span class="contato-Email">${inputEmail.value}</span>
  <span class="contato-Telefone">${inputTelefone.value}</span>
  <span class="contato-Endereço">${inputEndereço.value}</span>
`;

console.log(li)
lista.appendChild(li)
li.appendChild(btnExcluir)

form.reset();

});