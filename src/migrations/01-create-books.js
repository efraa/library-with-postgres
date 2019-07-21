'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isbn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desc: {
        type: Sequelize.TEXT
      },
      publisher: {
        type: Sequelize.STRING
      },
      publicDate: {
        type: Sequelize.DATE
      },
      paperback: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isNumeric: true
        }
      },
      language: {
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
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books')
  }
}
