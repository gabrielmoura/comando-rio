import atualizaDados from './atualizaDados';
import {write} from "./writeFile";
import axios from "axios";
import {format, subDays} from "date-fns";

export default async () => {
    await axios.get('https://api.dados.rio/v2/adm_cor_comando/ocorrencias', {
        params: {
            format: 'json',
            inicio: format(subDays(new Date(), 29), 'yyyy-MM-dd 00:00:00.0')
        }
    }).then(resp => {
        write(resp.data);
        resp.data.eventos.map(evento => atualizaDados(evento));
    })
}