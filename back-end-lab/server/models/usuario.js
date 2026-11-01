'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.belongsTo(models.Rol, { foreignKey: 'rol_id' });
    }
  }
  Usuario.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: false
  });
  return Usuario;
};
