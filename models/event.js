'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    notes: DataTypes.STRING
  });

  Event.associate = function (models) {
    models.Event.belongsTo(models.Job);
    models.Event.belongsTo(models.Status);
  };

  return Event;
};