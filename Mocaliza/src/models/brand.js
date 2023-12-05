const { DataTypes } = require('sequelize');
const { Database } = require('../configs/sequelize');

const Brand = Database.getInstance().sequelize.define('Brand', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

module.exports = { Brand };