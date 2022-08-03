import {pops} from "../lib/normalize";
import Evento from "../db/evento";

export default async (data) => {
    console.log(data);
    Evento.upsert({
        id: data.id,
        pop_id: data.pop_id,
        pop: pops(data.pop_id),
        bairro: data.bairro,
        latitude: data.latitude,
        inicio: data.inicio,
        titulo: data.titulo,
        fim: data.fim,
        prazo: data.prazo,
        descricao: data.descricao,
        informe_id: data.informe_id,
        gravidade: data.gravidade,
        longitude: data.longitude,
        status: data.status,
        tipo: data.tipo
    }).then(r => console.log(`Atualizado ${r}`))
        .catch(err => console.error(err))
}