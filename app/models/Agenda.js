const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    celular: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rua: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.NUMBER
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING
    },
    complemento: {
        type: DataTypes.STRING,
    }
});


module.exports = Agenda