import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { UpdateUserService } from './UpdateUserService';
import { FakeData } from '../utils/FakeData';

describe('UpdateUserService', () => {
    beforeAll(async() =>{
        const connection =await createConnection()
        connection.runMigrations()
    })

    afterAll(async() =>{
        const connection = getConnection()
        connection.query('DELETE FROM usuáruio')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve editar o nome do usuários', async() =>{

        const mockUser = new fakeData.createUser()

        const updateUserService = new UpdateUserService();

        const result = await updateUserService.execute({
            id: mockUser.id,
            nome: 'Outro usuário'
        });

        expect(result).toHaveLength(0);
    })
})