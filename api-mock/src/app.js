import express from "express";
const app = express();



app.get("/", (req, res) => {
    res.send("Olá Node js")
});




export default app;

