import Api from './Api';
import atualizaDados from './atualizaDados';

export default async () => {
    const api = new Api(process.env.USERNAME, process.env.PASSWORD);
    await api.autorization();
    await api.getData(data => {
        data.eventos.map(evento => atualizaDados(evento));
    });
}