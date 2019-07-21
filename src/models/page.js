import Sequelize from 'sequelize'
import sequelize from '../lib/db'

const Page = sequelize.define('pages', {
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
  bookId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

export default Page
