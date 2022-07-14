import 'reflect-metadata'
import express from 'express';
import { router } from './routes';
import createConnection from './database';


createConnetion();
const server = express();

server.use(express.json)
server.use(router)

server.listen(5000, () =>{
    console.log('Servidor on na porte 5000 http://localhost:5000/')
})