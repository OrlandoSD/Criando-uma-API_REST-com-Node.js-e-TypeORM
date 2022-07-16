import { getConnection } from 'typeorm';
import  createConnection  from '../database';
import { CreateUseController } from './CreateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../utils/mocks/mockResposne';

describe('CreateUserController', () => {
    beforeAll(async () =>{
        const connection = await createConnection()
        await connection.runMigration()
    })

    afterEach(async() => {
        const connection = getConnection()
        await connection.query('DELETE FROM usuarios')
        await connection.close()

    })

    const createController = new CreateUseController();

    const response = makeMockResponse()
    it('Deve retornar status 201 quando o usuário for criado', async() => {
        const request = {
            body: {
                nome: 'Algum usuário',
                email: 'email@email.com'
            }
        } as Request

        await CreateUseController.handle(request, response)

        expect(response.state.status).toBe(201)
    })

    it('Deve retornar status 400 quando o usuário for criado', async() => {
        const request = {
            body: {
                nome: '',
                email: 'email@email.com'
            }
        } as Request

        await CreateUseController.handle(request, response)

        expect(response.state.status).toBe(400)
    })

    it('Deve retornar status 201 quando o email não for informado', async() => {
        const request = {
            body: {
                nome: 'Algum usuário',
                email: ''
            }
        } as Request

        await CreateUseController.handle(request, response)

        expect(response.state.status).toBe(201)
    })
})