'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [{
      name: 'Don\'t Even Breathe (Maggie Novak Thriller Book 1)',
      isbn: '1503900916',
      desc: 'Florida homicide detective Maggie Novak has seen hundreds of brutal murder cases, but when she is called out to investigate the charred remains of a young woman,',
      publisher: 'Paulo Cohelo',
      publicDate: new Date(),
      paperback: 5,
      language: 'English',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('books', null, {})
  }
}
