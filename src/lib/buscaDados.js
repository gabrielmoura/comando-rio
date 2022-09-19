import Api from './Api';
import {hasToken} from "./cache";
import atualizaDados from './atualizaDados';

export default async () => {
    const api = new Api(process.env.USERNAME, process.env.PASSWORD);
    await api.autorization();
    if (hasToken()) {
        await api.getData(data => {
            data.eventos.map(evento => atualizaDados(evento));
        })

    }
}