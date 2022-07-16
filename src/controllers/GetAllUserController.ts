import { Request, Response } from 'express';
import { GetAllUserService } from '../services/CreateUserService';

class GetAllUserController{
   async handle (request: Request, response: Response) {
    const getAllUserService = new GetAllUserService();

    const user = await getAllUserService.execute();

    return response.status(200).json(user)
   }
}

export { GetAllUserController }