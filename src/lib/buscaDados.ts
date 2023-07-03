import atualizaDados, {EventoType} from './atualizaDados';
import axios from "axios";
import {format, subDays} from "date-fns";

interface Events {
    eventos: EventoType[];
    error?: string;
}

export default async () => {
    await axios.get<Events>('https://api.dados.rio/v2/adm_cor_comando/ocorrencias', {
        params: {
            format: 'json',
            inicio: format(subDays(new Date(), 28), 'yyyy-MM-dd 00:00:00.0')
        }
    }).then(resp => {
        //    write(resp.data);
        process.env.NODE_ENV !== 'production' && console.log('fechadas', resp.data.error);
        resp.data.eventos.map(evento => atualizaDados(evento, 'fechadas'));
    })
    await axios.get<Events>('https://api.dados.rio/v2/adm_cor_comando/ocorrencias_abertas', {
        params: {
            format: 'json'
        }
    }).then(resp => {
        process.env.NODE_ENV !== 'production' && console.log('abertas', resp.data.error);
        resp.data.eventos.map(evento => atualizaDados(evento, 'abertas'));
    })

}
