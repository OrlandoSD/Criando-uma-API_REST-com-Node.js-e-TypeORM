import { getRepository } from 'typeorm';
import { Usuario } from '../entities/Usuario';
interface IUsuario{
    id: string,
    nome: string,
    email?: string
}

class CreateUserService {
    async execute( {id, nome, email}:IUsuario){
        const Usuario = await getRepository(Usuario)
            .createQueryBuilder()
            .insert()
            .into(Usuario)
            .values([
                {
                    id:id
                    nome:nome
                    email:email

                }

            ]) 
            .execute();
        
        console.log(usuario.identifiers[0])

        return Usuario.identifiers[0]

        return;

    }
}

export{CreateUserService}