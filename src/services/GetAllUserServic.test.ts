import  createConnection  from '../database';
import { getConnection } from 'typeorm';
import { GetAllUserService } from './GetAllUserService';
import { FakeData } from '../utils/FakeData';

describe('GetAllUserService', () => {
    beforeAll(async() =>{
        const connection =await createConnection()
        connection.runMigration()
    })

    afterAll(async() =>{
        const connection = getConnection()
        connection.query('DELETE FROM usuáruio')
        connection.close()
    })

    const fakeData = new FakeData();

    it('Deve retornar todos usuários cadastrados', async() =>{
        await fakeData.execute();

        const expectedResponse = [
            {
                nome: 'Algum usuário',
                email: 'algumusuario@gamil.com',
            },
            {
                nome: 'Outro usuário',
                email: ''
            }
        ]

        const getAllUserService = GetAllUserService();
        
        const result = await getAllUserService();

        expect(result).toMatchObject(expectedResponse)
    })
})