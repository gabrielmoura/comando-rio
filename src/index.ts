require('dotenv').config()
import cron from 'node-cron';
import buscaDados from './lib/buscaDados';

console.log('Inicia Cron');
if(process.env.FORCE){
 buscaDados();
}
cron.schedule('*/28 * * * *', buscaDados);