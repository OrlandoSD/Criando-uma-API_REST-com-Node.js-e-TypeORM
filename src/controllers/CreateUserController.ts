import {Request, Response} from 'express';
import { CreateUserService } from "../services/CreateUserService";
import { v4 as uuid } from 'uuid';


class CreateUseController {
   handle(request: Request, response: Response) { 
       
    const createUserService = new CreateUserService();

    const nome = request.body.nome;
    const email = request.body.email;
    const id = uuid();

    if(nome.length === 0 || email.length === 0){
    
     return response.status(400).json({mensagem: 'Nome obrigatório'})
    }

        const user = createUserService.execute({id, nome, email})

    return response.status(201).json({user})
    }
}

export { CreateUseController }