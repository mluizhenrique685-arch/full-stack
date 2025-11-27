const express = require("express");
const app = express();
const port = 3000;
const nomes = [
  { id: 1, nome: "Fernanda", idade: "18" },
  { id: 2, nome: "Caio", idade: "23" },
  { id: 3, nome: "Pedro", idade: "56" },
  { id: 4, nome: "Samuel", idade: "45" },
  { id: 5, nome: "Doris", idade: "33" },
];
    //Criando funções auxiliares
    //Retornar o objeto por id
        function buscarNomePorId(id){
            return nomes.filter((nomes) => nomes.id == id)
        };
    //pegar a posição ou index do elemento do array por id
        function buscarIdNome(id){
            return nomes.findIndex((nome) => nome.id == id);
        };



    //Rota principal

        app.get("/", (req, res) => {
            res.send("Olá essa é a rota principal")
        });

    app.get("/teste", (req, res) => {
        res.send("API nodePeople está funcionando!");
    });

    app.listen(port,() => {
        console.log(`Servidor rodando no endereço http://localhost:${port}`);
    }); 

    app.get("/nome", (req, res) => {
        res.send(nomes)
    });
        //Buscando por id 
        app.get("/nome/:id", (req, res) => {
            let index = req.params.id;

            res.json(buscarNomePorId(index))
        });


        //Criando Post para cadastrar
        app.post("/nome", (req, res) => {
            nomes.push(req.body);
            res.status(201).send("Nome cadastrado com sucesso");
        });



        //Criando rota excluir

        app.delete("/nome/:id", (req, res) => {
            let index = buscarIdNome (req.params.id);
            nomes.splice(index, 1);
            res.send(`Nomes com id ${req.params.id} excluida com sucesso`);
        });