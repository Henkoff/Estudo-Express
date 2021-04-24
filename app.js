const { request } = require('express');
const express = require('express');
const app = express();

//indica para o express que usaremos JSON
app.use(express.json());

let usuarios = [
    {nome: "Henrique", sobrenome: "Ibiapino"}
]

//http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send('ola mundo');
})

//http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    console.log(request);
    return response.json(usuarios);
})

app.post("/usuarios", (request, response) => {
    const { nome, sobrenome }  = request.body;

     usuarios.push({ nome, sobrenome});
     
     return response.json({nome, sobrenome});
})

//http://localhost:3000/usuarios/henrique
app.put("/usuarios/:sobrenome", (request, response) => {
  const { nome } = request.params;


  const { sobrenome } = reques.body;
})

app.listen(3000, (req, res) => {
    
    console.log('servidor rodando!');
})