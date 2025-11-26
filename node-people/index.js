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