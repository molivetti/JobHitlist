'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING(2)
      },
      description: {
        type: Sequelize.TEXT
      },
      url: {
        type: Sequelize.STRING
      },
      salaryMin: {
        type: Sequelize.INTEGER
      },
      salaryMax: {
        type: Sequelize.INTEGER
      },
      contactName: {
        type: Sequelize.STRING
      },
      contactEmail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jobs');
  }
};