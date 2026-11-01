'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    static associate(models) {

    }
  }
  Estudiante.init({
    carnet: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    carrera: DataTypes.STRING(100),
    promedio: {
      type: DataTypes.DECIMAL(4, 2),
      defaultValue: 0,
      validate: {
        min: { args: [0], msg: 'El promedio no puede ser negativo' },
        max: { args: [99.99], msg: 'El promedio no puede ser mayor a 99.99' }
      }
    }
  }, {
    sequelize,
    modelName: 'Estudiante',
    tableName: 'estudiantes',
    timestamps: false
  });
  return Estudiante;
};
