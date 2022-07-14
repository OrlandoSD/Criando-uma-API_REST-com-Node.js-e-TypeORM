import {Router, Request, Response} from 'express'
import { CreateUseController } from './controllers/CreateUserController';

const router = Router();

const createUseController = new CreateUseController();

router.get('/', (request: Request, response: Response) =>{
    return response.json({mensagem: 'Bem vindo a nossa API'})
 })
 router.get('/usuarios', createUseController.handle)
 

 export{router}