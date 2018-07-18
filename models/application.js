'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
    coverLetter:  DataTypes.TEXT,
    channel:      DataTypes.STRING,
    notes:        DataTypes.TEXT 
  });

  Application.associate = function (models) {
    models.Application.belongsTo(models.Job);
  };

  return Application;
};