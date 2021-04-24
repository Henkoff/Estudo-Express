const express = require('express');
const app = express();

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

app.listen(3000, () => {
    
    console.log('servidor rodando!');
})

