const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');


class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'product',
  }
);

module.exports = Product;