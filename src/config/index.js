/* eslint-disable no-undef */
const port = process.env.PORT || 2302
const prefixRoutes = process.env.PREFIX_ROUTES || '/books'
const database = process.env.DB_NAME || 'library'
const host = process.env.DB_HOST || 'localhost'
const username = process.env.DB_USER || 'root'
const password = process.env.DB_PASS || 'password'
const dialect = process.env.DB_DIALECT || 'postgres'

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
