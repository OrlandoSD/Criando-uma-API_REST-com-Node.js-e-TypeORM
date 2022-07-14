interface IUsuario{
    nome: string,
    email: string
}

class CreateUserService {
    execute({nome, email}:IUsuario){
        const data = []//'postgres://yboaiota:Mj8-K-cSrv5sRS5C3UAHEk3ykc8CzRs6@motty.db.elephantsql.com/yboaiota'];

        data.push({nome, email});

        return;

    }
}

export{CreateUserService}