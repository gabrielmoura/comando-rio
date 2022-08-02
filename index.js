const database = require('./db');
const { Op } = require("sequelize");
const Evento = require('./evento');
const moment = require('moment-timezone');
const sequelize = require("sequelize");
const sequelizesql = require("sequelize");
const axios = require('axios');
const cron = require('node-cron');

const dt = new Date();

console.log(" ------------------- Inicou Nodemon - ------------------- ");

cron.schedule('*/2 * * * *', async () => {
   console.log("Cada 2 minutos"); 
   //await listarEventosV2SQLSERVER();
   console.clear();
},null, true, 'America/Sao_Paulo')


//inicio de um novo dia
cron.schedule('28 00 * * *', async () => { console.log("'28 00 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 00 * * *', async () => { console.log("'58 00 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 01 * * *', async () => { console.log("'28 01 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 01 * * *', async () => { console.log("'58 01 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 02 * * *', async () => { console.log("'28 02 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 02 * * *', async () => { console.log("'58 02 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 03 * * *', async () => { console.log("'28 03 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 03 * * *', async () => { console.log("'58 03 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 04 * * *', async () => { console.log("'28 04 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 04 * * *', async () => { console.log("'58 04 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 05 * * *', async () => { console.log("'28 05 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 05 * * *', async () => { console.log("'58 05 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 06 * * *', async () => { console.log("'28 06 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 06 * * *', async () => { console.log("'58 06 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 07 * * *', async () => { console.log("'28 07 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 07 * * *', async () => { console.log("'58 07 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 08 * * *', async () => { console.log("'28 08 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 08 * * *', async () => { console.log("'58 08 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 09 * * *', async () => { console.log("'28 09 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 09 * * *', async () => { console.log("'58 09 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 10 * * *', async () => { console.log("'28 10 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 10 * * *', async () => { console.log("'58 10 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 11 * * *', async () => { console.log("'28 11 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 11 * * *', async () => { console.log("'58 11 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 12 * * *', async () => { console.log("'28 12 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 12 * * *', async () => { console.log("'58 12 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 13 * * *', async () => { console.log("'28 13 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 13 * * *', async () => { console.log("'58 13 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 14 * * *', async () => { console.log("'28 14 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 14 * * *', async () => { console.log("'58 14 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 15 * * *', async () => { console.log("'28 15 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 15 * * *', async () => { console.log("'58 15 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 16 * * *', async () => { console.log("'28 16 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 16 * * *', async () => { console.log("'58 16 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 17 * * *', async () => { console.log("'28 17 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('34 17 * * *', async () => { console.log("'58 17 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 18 * * *', async () => { console.log("'28 18 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 18 * * *', async () => { console.log("'58 18 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 19 * * *', async () => { console.log("'28 19 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 19 * * *', async () => { console.log("'58 19 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('22 20 * * *', async () => { console.log("'28 20 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 20 * * *', async () => { console.log("'58 20 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 21 * * *', async () => { console.log("'28 21 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 21 * * *', async () => { console.log("'58 21 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('21 22 * * *', async () => { console.log("'28 22 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 22 * * *', async () => { console.log("'58 22 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('28 23 * * *', async () => { console.log("'28 23 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')
cron.schedule('58 23 * * *', async () => { console.log("'58 23 * * *'"); await agendamentoDefinido(); },null, true, 'America/Sao_Paulo')


function pops(params) {

  
  var pop = params;
  if (pop === 1) {pop = 'Acidente/enguiço sem vítima';
  } else if (pop === 2) {pop = 'Acidente com vítima(s)';
  } else if (pop === 3) {pop = 'Acidente com vítima(s) fatal(is)';
  } else if (pop === 4) {pop = 'Incêndio em veículo(s)';
  } else if (pop === 5) {pop = 'Bolsão dágua em via';
  } else if (pop === 6) {pop = 'Alagamentos e enchentes';
  } else if (pop === 7) {pop = 'Manifestação em local público';
  } else if (pop === 8) {pop = 'Incêndio em imóvel';
  } else if (pop === 9) {pop = 'Sinais de trânsito com mau funcionamento';
  } else if (pop === 10) {pop = 'Reintegração de Posse';
  } else if (pop === 11) {pop = 'Queda de árvore';
  } else if (pop === 12) {pop = 'Queda de poste';
  } else if (pop === 13) {pop = 'Acidente com queda de carga';
  } else if (pop === 14) {pop = 'Incêndio no entorno de vias públicas';
  } else if (pop === 15) {pop = 'Incêndio dentro de túneis';
  } else if (pop === 16) {pop = 'Vazamento de água / esgoto';
  } else if (pop === 17) {pop = 'Falta de luz / Apagão';
  } else if (pop === 18) {pop = 'Implosão';
  } else if (pop === 19) {pop = 'Queda de estrutura de alvenaria';
  } else if (pop === 20) {pop = 'Vazamento de gás';
  } else if (pop === 21) {pop = 'Evento em local público ou particular';
  } else if (pop === 22) {pop = 'Atropelamento';
  } else if (pop === 23) {pop = 'Afundamento de Pista / Buraco na via';
  } else if (pop === 24) {pop = 'Abalroamento';
  } else if (pop === 25) {pop = 'Obra em local público';
  } else if (pop === 26) {pop = 'Operação policial';
  } else if (pop === 27) {pop = 'Bloco de Rua';
  } else if (pop === 28) {pop = 'Deslizamento';
  } else if (pop === 29) {pop = 'Animal em local público';
  } else if (pop === 30) {pop = 'Acionamento de sirenes';
  } else if (pop === 31) {pop = 'Alagamento';
  } else if (pop === 32) {pop = 'Enchente';
  } else if (pop === 33) {pop = 'Lâmina dágua';
  } else if (pop === 34) {pop = 'Acidente ambiental';
  } else if (pop === 35) {pop = 'Bueiro';
  } else if (pop === 36) {pop = 'Resgate ou remoção de Animais Terrestres e Aéreos';
  } else if (pop === 37) {pop = 'Remoção de Animais Mortos na Areia';
  } else if (pop === 38) {pop = 'Resgate de Animal Marinho Preso em rede / Encalhado';
  } else if (pop === 39) {pop = 'Incendio em vegetacao';
  } else if (pop === 40) {pop = 'Galho sobre fiação';
  } else {pop = 'vazio';}

  return pop
  
}

const listarEventosV2 = async() => {
  const response = await axios({
    method: 'post',
    baseURL: 'http://geoportal.cor.rio.gov.br',
    url: '/corws/login',
    headers: { "Content-Type": "application/json" },
    data: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

    var config = {
      method: 'post',
      url: 'http://geoportal.cor.rio.gov.br/statuscomando/v2/listarEventos',
        headers: { 
          'Authorization': response.data, 
          'Content-Type': 'application/json'
        },
        data: {
          "inicio": "2022-07-25 00:00:00.0",
        }
      };
      
      await axios(config)
      .then(function (response) {
        console.clear();
        console.log(response.data.eventos.length  + " Filtrados com início 25/07/2022" );
        console.log(response.data.eventos);
          
        response.data.eventos.map(evento => 

          Evento.findByPk(evento.id)
          .then(record => {

            if (!record) {
              
              Evento.create({
                      
                id: evento.id,
                pop_id: evento.pop_id,
                pop: pops(evento.pop_id),
                bairro: evento.bairro,
                latitude: evento.latitude,
                inicio: evento.inicio,
                titulo: evento.titulo,
                fim: evento.fim,
                prazo: evento.prazo,
                descricao: evento.descricao,
                informe_id: evento.informe_id,
                gravidade: evento.gravidade,
                longitude: evento.longitude,
                status: evento.status,
                tipo: evento.tipo                
              })
              
            } else {
              let values = {
                
                id: evento.id,
                pop_id: evento.pop_id,
                pop: pops(evento.pop_id),
                bairro: evento.bairro,
                latitude: evento.latitude,
                inicio: evento.inicio,
                titulo: evento.titulo,
                fim: evento.fim,
                prazo: evento.prazo,
                descricao: evento.descricao,
                informe_id: evento.informe_id,
                gravidade: evento.gravidade,
                longitude: evento.longitude,
                status: evento.status,
                tipo: evento.tipo
              }

              record.update(values)              
            }

          }))
          
          console.log("---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------fim inserir create")
      })
      .catch(function (error) {
      });
}



const agendamentoDefinido = async () => {
  console.clear();
  console.log("agendamento");
  try {
    await listarEventosV2();  

  } catch (error) {
    console.log("erro ao inserir abertos")
  }
}
agendamentoDefinido();