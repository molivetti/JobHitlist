'use strict';
module.exports = (sequelize, DataTypes) => {
  var Resume = sequelize.define('Resume', {
    path: DataTypes.STRING
  });

  Resume.associate = function (models) {
    models.Resume.hasMany(models.Application);
  };

  return Resume;
};