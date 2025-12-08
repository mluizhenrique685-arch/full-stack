import express from "express";
import conexao from "../infra/conexao.js";
const app = express();



app.get("/", (req, res) => {
    res.send("Olá copa do mundo!")
});

//Buscar todas as seleções
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result ) => {
        res.json(result);
    });
});
app.post('/selecoes', (req, res) => {
    selecoes.push(req.body);
    res.status(201).send("time cadastrado com sucesso");
});




export default app;

