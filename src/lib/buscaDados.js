import Api from './Api';

export default async () => {
    const api = new Api(process.env.USERNAME, process.env.PASSWORD);
    await api.autorization();
    if (!!api.getToken()) {
        import atualizaDados from './atualizaDados';
        import  sequelize from '../db';
        const t = await sequelize.transaction();
        try{
            api.getData(data => {
                data.eventos.map(evento => atualizaDados(evento));
            })
            await t.commit();
        }catch (error) {
            await t.rollback();     
        }
    }
}