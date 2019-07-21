import Sequelize from 'sequelize'
import sequelize from '../lib/db'
import Page from './page'

const Book = sequelize.define('books', {
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
  }
})

Book.hasMany(Page)
Page.belongsTo(Book)

export default Book
