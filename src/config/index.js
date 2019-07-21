/* eslint-disable no-undef */
import * as setup from './config.json'
const dev = setup.development
const port = process.env.PORT || 2302
const prefixRoutes = process.env.PREFIX_ROUTES || '/books'
const database = process.env.DB_NAME || dev.database
const host = process.env.DB_HOST || dev.host
const username = process.env.DB_USER || dev.username
const password = process.env.DB_PASS || dev.password
const dialect = process.env.DB_DIALECT || dev.dialect

const config = {
  database,
  username,
  password,
  host,
  dialect,
  logging: false
}

export {
  config,
  port,
  prefixRoutes
}
