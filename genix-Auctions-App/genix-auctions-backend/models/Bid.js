const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Auction = require('./Auction');

const Bid = sequelize.define('Bid', {
  bidAmount: { type: DataTypes.DECIMAL, allowNull: false }
});

Bid.belongsTo(User);
Bid.belongsTo(Auction);

module.exports = Bid;