import Api from './Api';

export default async () => {
    const api = new Api(process.env.USERNAME, process.env.PASSWORD);
    await api.autorization();
    if (!!api.getToken()) {
        import atualizaDados from './atualizaDados';
        api.getData(data => {
            data.eventos.map(evento => atualizaDados(evento));
        })
    }
}