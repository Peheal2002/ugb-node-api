const {DataTypes} = require("sequelize");

const sequelize = require("../database/database.js");
const Movie = sequelize.define("Movie",{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    year: {
        type: DataTypes.INTEGER,
        allowNull: false
        //allowNull: false significa que o campo não pode ser nulo, ou seja, é obrigatório fornecer um valor para esse campo ao criar ou atualizar um registro no banco de dados.
    },
 });

module.exports = Movie;
