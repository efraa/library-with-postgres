import Sequelize from 'sequelize'
import sequelize from '../lib/db'

const Page = sequelize.define('pages', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  book: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nextPage: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  prevPage: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  page: {
    type: Sequelize.NUMBER,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  registered: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

export default Page
