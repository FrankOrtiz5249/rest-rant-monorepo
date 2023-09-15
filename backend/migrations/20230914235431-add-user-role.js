'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'role', {
      typr: Sequelize.DataTypes.ENUM,
      values: [
        'reviewer',
        'admin',
      ],
      defaultValue: 'reviewer'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'role')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
