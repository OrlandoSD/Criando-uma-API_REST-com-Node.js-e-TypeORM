import { Connetion, createConnetion, getConnection } from 'typeorm'

export default async(): Promise<Connetion> => {
    const defaultOption = await getConnection();
    return createConnetion(
        object.assing(defaultOption)
    )
}