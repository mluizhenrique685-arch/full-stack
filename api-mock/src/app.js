import express from "express";
const app = express();

    app.use(express.json());


app.get("/", (req, res) => {
    res.send("Olá Node js")
});

app.get("/cadastros", (req, res) => {
    res.send(cadastros)
});





export default app;

const cadastros = [
{
id: 1,
nome: "Fernanda Silva",
telefone: "11987654321",
cpf: "123.456.789-00",
email: "fernanda@gmail.com",
idade: 28,
endereco: "Rua das Flores, 123"
},
{
id: 2,
nome: "Caio Oliveira",
telefone: "11922223333",
cpf: "987.654.321-11",
email: "caio@gmail.com",
idade: 32,
endereco: "Avenida Brasil, 450"
},
{
id: 3,
nome: "Pedro Almeida",
telefone: "21999998888",
cpf: "321.654.987-55",
email: "pedro@hotmail.com",
idade: 45,
endereco: "Rua Central, 999"
}
];

//função buscar id

function buscarCadastroPorId (id) {
    return cadastros.filter((nome) => nome.id == id )
};

//função pegar a posição ou index do elemento array por id

function buscarIdcadastros(id){
            return cadastros.findIndex((nome) => nome.id == id);
        };


app.get("/cadastros/:id", (req, res) => {
    let index = req.params.id;

    res.json(buscarCadastroPorId(index))
});
// deletar id

app.delete("/cadastros/:id", (req, res) => {
   let id = req.params.id;
   let index = buscarIdcadastros(id); 

   //se não encontrar, retorna a erro

   if (index === -1){
    return res.status(404).send(`Nenhum cadastro com id ${id} encontrado`)
   }

   cadastros.splice(index, 1);
   res.send(`Cadastro com id ${req.params.id} excluida com sucesso`)
});

//criando rota para cadastrar times

app.post("/cadastros", (req, res) => {
    cadastros.push(req.body);
    res.status(201).send("Cadastro cadastrado com sucesso");

     
});
