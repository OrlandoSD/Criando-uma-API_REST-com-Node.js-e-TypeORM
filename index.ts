import express, {Request, Response} from 'express';

const server = express();

server.get('/', (request: Request, response: Response) =>{
   return response.json({mensagem: 'Bem vindo a nossa API'})
})

server.listen(5000, () =>{
    console.log('Servidor on na porte 5000')
})