const Sequelize = require('sequelize');
const database = require('./index');

const Evento = database.define('evento',
    {
        id: {type: Sequelize.INTEGER, autoIncrement: false, allowNull: false, primaryKey: true},
        pop_id: Sequelize.INTEGER,
        pop: Sequelize.STRING,
        bairro: Sequelize.STRING,
        latitude: Sequelize.STRING,
        inicio: Sequelize.DATE,
        titulo: Sequelize.STRING,
        fim: Sequelize.DATE,
        prazo: Sequelize.STRING,
        descricao: Sequelize.STRING,
        informe_id: Sequelize.INTEGER,
        gravidade: Sequelize.STRING,
        longitude: Sequelize.STRING,
        status: Sequelize.STRING,
        tipo: Sequelize.STRING
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
    })

Evento.sync();

export default Evento;