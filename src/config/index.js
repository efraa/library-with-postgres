/* eslint-disable no-undef */
import dotenv from 'dotenv'
dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

const port = process.env.PORT
const prefixRoutes = process.env.PREFIX_ROUTES

export {
  port,
  prefixRoutes
}
