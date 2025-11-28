const express = require("express");
const app = express();
const port = 3000;


//Indicar para express ler body com json
app.use(express.json());



const times = [
  { id: 1, nomes: "Corinthians", estado: "SP", titulos: 7 },
  { id: 2, nomes: "Palmeiras", estado: "SP", titulos: 11 },
  { id: 3, nomes: "Santos", estado: "SP", titulos: 8 },
  { id: 4, nomes: "Flamengo", estado: "RJ", titulos: 7 },
  { id: 5, nomes: "Vasco", estado: "RJ", titulos: 4 },
  { id: 6, nomes: "Atlético Mineiro", estado: "MG", titulos: 3 },
  { id: 7, nomes: "Cruzeiro", estado: "MG", titulos: 4 },
];



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

        function buscarTimesPorID(id){
            return times.filter((nomes) => nomes.id == id)
        };


    //pegar a posição ou index do elemento do array por id
        function buscarIdNome(id){
            return nomes.findIndex((nome) => nome.id == id);
        };

        function buscarIdTimes(id){
            return times.findIndex((nomes) => nomes.id == id);
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

    //adicionando times
    app.get("/times", (req, res) => {
        res.send(times)
    });



        //Buscando por id 
        app.get("/nome/:id", (req, res) => {
            let index = req.params.id;

            res.json(buscarNomePorId(index))
        });

        //buscando por id na times
        app.get("/times/:id", (req, res) => {
            let index = req.params.id;

            res.json(buscarTimesPorID(index))
        });





        //Criando Post para cadastrar
        app.post("/nome", (req, res) => {
            nomes.push(req.body);
            res.status(201).send("Nome cadastrado com sucesso");
        });

        //Criando Post para cadastrar os times
        app.post("/times", (req, res) => {
            times.push(req.body);
            res.status(201).send("Time cadastrado com sucesso");
        });



        //Criando rota excluir

        app.delete("/nome/:id", (req, res) => {
            let index = buscarIdNome (req.params.id);
            nomes.splice(index, 1);
            res.send(`Nomes com id ${req.params.id} excluida com sucesso`);
        });

        app.delete("/times/:id", (req, res) => {
            let id = req.params.id;
            let index = buscarIdTimes(id);

            //Se não encontrar, retorna erro
            if (index === -1){
                return res.status(404).send(`Nenhum time com id ${id} foi encontrado`)
            }

            
            times.splice(index, 1);
            res.send(`Time com id ${req.params.id} excluido com sucesso`);
        });

        //Rota alterar
        app.put("/nome/:id", (req, res) => {
            let index = buscarIdNome(req.params.id);
            nomes[index].nome = req.body.nome;
            nomes[index].idade = req.body.idade;

            res.json(nomes);
        });
        
        app.put("/times/:id", (req, res) => {
            let index = buscarIdTimes(req.params.id);
            times[index].nomes = req.body.nomes;
            times[index].estado = req.body.estado;
            times[index].titulos = req.body.titulos;

            res.json(times);
        });