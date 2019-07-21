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
    allowNull: false,
    validate: {
      is: ["^[a-z]+$",'i']
    }
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
    type: Sequelize.NUMBER,
    defaultValue: 0,
    validate: {
      isNumeric: true
    }
  },
  language: {
    type: Sequelize.STRING
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

Book.hasMany(Page, { foreingKey: 'book', sourceKey: 'id' })
// Page.belongsTo(Book, { foreingKey: 'book', sourceKey: 'id' })

export default Book
