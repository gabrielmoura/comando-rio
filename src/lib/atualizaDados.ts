import {pops} from "./normalize";
import Evento from "../db/evento";

export interface EventoType {
    id: number;
    pop_id: number;
    pop: string;
    bairro: string;
    latitude: string;
    inicio: string;
    titulo: string;
    fim: string;
    prazo: string;
    descricao?: string;
    informe_id?: number;
    gravidade: string;
    longitude: string;
    status: string;
    tipo: string;
}

export default async (data: EventoType, status) => {
    if (process.env.NODE_ENV !== "production") {
        console.log(data);
    }
    if (data.id === null || isNaN(data.id)) {
        return null;
    }

    Evento.upsert({
        ...data,
        pop: pops(data.pop_id),

    }).then(r => process.env.NODE_ENV !== 'production' && console.log(`${status}:: Atualizado ${data.id}`, JSON.stringify(r)))
        .catch(console.error)
}