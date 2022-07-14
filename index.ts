import express from 'express';

const server = express();

server.listen(5000, () =>{
    console.log('Servidor on na porte 5000')
})