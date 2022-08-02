import Api from './Api';

export default () => {
    const api = new Api(process.env.USERNAME, process.env.PASSWORD);
    api.autorization();
    if (!!api.getToken()) {
        import atualizaDados from './atualizaDados';
        api.getData(data => {
            data.eventos.map(evento => atualizaDados(evento));
        })
    }
}