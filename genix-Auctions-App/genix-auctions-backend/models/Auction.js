const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Auction = sequelize.define('Auction', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  startingBid: { type: DataTypes.DECIMAL, allowNull: false },
  endDate: { type: DataTypes.DATE, allowNull: false }
});

module.exports = Auction;