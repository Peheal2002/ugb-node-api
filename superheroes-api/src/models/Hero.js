const { DataTypes } = require("sequelize");
//Sequelize é um ORM (Object-Relational Mapping) que facilita a interação com bancos de dados relacionais em aplicações Node.js. Ele permite definir modelos de dados, realizar consultas e manipular registros de forma mais intuitiva, utilizando uma sintaxe baseada em objetos.
//require("../database/database.js") importa a configuração do banco de dados definida no arquivo database.js, permitindo que o modelo Hero utilize a instância do Sequelize para interagir com o banco de dados SQLite.
const sequelize = require("../database/database.js");

const Hero = sequelize.define("Hero", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    universe: {
        type: DataTypes.STRING,
        allowNull: false
    },

    power: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Hero;