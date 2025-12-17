import express from "express";
import conexao from "../infra/conexao.js";

const app = express();

//indicar para express ler o body com json
app.use(express.json());


//rota inicial

app.get("/", (req, res) => {
    res.send("Olá Copa do Mundo!");
});

// Buscar todas as seleções 
app.get('/selecoes', (req, res) => {
    const sql = "select * from selecoes";

    conexao.query(sql, (erro, result) => {
        res.json(result);
    });
});

// Buscando por ID
app.get('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "select * from selecoes where id=?;";

    conexao.query(sql, id, (erro, result) => {
        res.json(result[0]);
    });
});

// Deletando registro
app.delete('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const sql = "delete from selecoes where id=?;";

    conexao.query(sql, id, () => {
        res.json({menssagem:"delete com sucesso"});
    });

});

//creando post para cadastrar 
app.post('/selecoes', (req, res) => {
    const selecao = req.body;
    const sql = "INSERT INTO selecoes SET?;";
    
    conexao.query(sql, selecao, () => {
        res.json({mensagem: "Cadastrado com sucesso!"});
    })
});

//atualizando registro 
app.put('/selecoes/:id', (req, res) => {
    const id = req.params.id;
    const selecao = req.body;
    const sql = "update selecoes set ? where id=?;";

    conexao.query(sql, [selecao, id], () => {
        res.json({mensagem: "Atualizando com sucesso!"});
    });
});

 
export default app;