'use strict';
module.exports = (sequelize, DataTypes) => {
  var Status = sequelize.define('Status', {
	id: {
	  type: DataTypes.TINYINT,
	  primaryKey: true,
	  autoIncrement: true
	},
    name: DataTypes.STRING
  });

  return Status;
};