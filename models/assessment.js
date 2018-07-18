'use strict';
module.exports = (sequelize, DataTypes) => {
  var Assessment = sequelize.define('Assessment', {
    content: 	DataTypes.TEXT,
    path: 		DataTypes.STRING,
    response: 	DataTypes.TEXT
  });

  Assessment.associate = function (models) {
    models.Assessment.belongsTo(models.Application);
  };

  return Assessment;
};