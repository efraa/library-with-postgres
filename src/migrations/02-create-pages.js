'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pages', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nextPage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true
        }
      },
      prevPage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true
        }
      },
      page: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true
        }
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pages')
  }
}
