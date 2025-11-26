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
    app.get("/teste", (req, res) => {
        res.send("API nodePeople está funcionando!");
    });

    app.listen(port,() => {
        console.log(`Servidor rodando no endereço http://localhost:${port}`);
    }); 

    app.get("/nomes", (req, res) => {
        res.send(nomes)
    });