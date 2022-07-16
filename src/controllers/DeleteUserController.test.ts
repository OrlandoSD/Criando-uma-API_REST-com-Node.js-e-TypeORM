import { createConnection }  from "../database";
import { getConnection } from 'typerom';
import { makeMockResponse } from "../utils/mocks/mockResposne";
import { makeMockRequest } from "../utils/mocks/mockRequest";
import { FakeData } from '../utils/FakeData';
import { DeleteUserController } from './DeleteUserController';

describe('DeleteUserController', () => {
    beforeAll(async () => {
        const connection = await createConnection()
        connection.runMigration()
    })

    afterAll(async() =>{
        const connection = getConnection()
        connection.close()
    })

    const fakeData = new FakeData();

    it('deve retornar status 204 quando o usário for deletado',async () => {
        const mockUser = await fakeData.createUser();

        const deleteUserController = new DeleteUserController();

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        });

        const response = makeMockResponse()

        await deleteUserController.handle(request, response);

        expect(response.state.status).toBe(204)
    })
})
