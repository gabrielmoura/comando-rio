import 'dotenv/config'
import {schedule} from 'node-cron';
import buscaDados from './lib/buscaDados';

console.log('Inicia Cron');
if (process.env.FORCE === 'true') {
    buscaDados()
        .then(() => console.log('Atualização Forçada: ', new Date().toString()));
}
schedule('*/28 * * * *', buscaDados);