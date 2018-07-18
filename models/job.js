'use strict';
module.exports = (sequelize, DataTypes) => {
  var Job = sequelize.define('Job', {
    title:        DataTypes.STRING,
    company:      DataTypes.STRING,
    city:         DataTypes.STRING,
    state:        DataTypes.STRING(2),
    description:  DataTypes.TEXT,
    url:          DataTypes.STRING,
    salaryMin:    DataTypes.INTEGER,
    salaryMax:    DataTypes.INTEGER,
    contactName:  DataTypes.STRING,
    contactEmail: DataTypes.STRING
  });

  Job.associate = function (models) {
    models.Job.hasOne(models.Application);
  };

  return Job;
};
