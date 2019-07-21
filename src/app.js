import express from 'express'
import bodyParser from 'body-parser'
import { prefixRoutes } from './config'

// Get routes
import book from './routes/book'
import page from './routes/page'

const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Define Routes
app.use(prefixRoutes, book)
app.use(prefixRoutes, page)

export default app
