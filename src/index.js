import app from './app'
import { port } from './config'
import sequelize from './lib/db'

const init = async () => {
  try {
    // Connect Database
    await sequelize.authenticate()
      .then(() => { console.log('Connected database') })

    // Lauch Server
    await app.listen(port, () => console.log('Server running'))
  } catch (e) {
    console.error(e)
  }
}

init()
