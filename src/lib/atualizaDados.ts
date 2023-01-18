import {pops} from "./normalize";
import Evento from "../db/evento";

export default async (data) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(data);
    }
    if(data.id===null||isNaN(data.id)){
        return null;
    }

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
    }).then(r => process.env.NODE_ENV !== 'production' && console.log(`Atualizado ${r}`))
        .catch(err => console.error(err))
}