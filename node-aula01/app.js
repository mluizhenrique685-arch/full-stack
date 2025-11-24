const express = require("express");
const app = express();
const port = 3000;

// Variavel com os dados produtos
const produtos = [
    { id: 1, nome: 'Produto A', preco: 100 },
    { id: 2, nome: 'Produto B', preco: 150 },
    { id: 3, nome: 'Produto C', preco: 200 },
];


// Criar função
// Rota principal
app.get('/', (req, res) => {
    res.send('Bem vindo ao servidor Node.js');
});
//Rota Produtos
app.get('/produtos', (req, res) => {
    res.send(produtos);
});
//Rota Home
app.get('/home', (req, res) => {
    //console.log("olá: ", __dirname);
    res.sendFile(__dirname + '/public/home.html');
});

// Executando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});