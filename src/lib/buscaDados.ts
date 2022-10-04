import Api from './Api';
import atualizaDados from './atualizaDados';
import {write} from "./writeFile";

export default async () => {
    const api = new Api(process.env.USERAPI, process.env.PASSAPI);
    await api.autorization();

    await api.getData(data => {
        // Escrita em arquivo
        write(data);
        // Escrita no banco de dados
        data.eventos.map(evento => atualizaDados(evento));
    });
}