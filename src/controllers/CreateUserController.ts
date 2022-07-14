import {Request, Response} from 'express';


class CreateUseController {
   handle(request: Request, response: Response) { 
       
    const nome = request.body.nome;
    
     return response.status(400).json({mensagem: 'informe um nome de usuário ?  '})
    }
}

export { CreateUseController }