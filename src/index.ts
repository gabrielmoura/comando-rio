require('dotenv').config()
// import cron from 'node-cron';
import buscaDados from './lib/buscaDados';

console.log('Inicia Cron');
// cron.schedule('28,58 * * * *', buscaDados);
buscaDados();