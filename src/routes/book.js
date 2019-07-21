import { Router } from 'express'
import { create } from '../controllers/book'
const api = Router()

// @Desc    Create book
// @Access  Private.
api.post('/', create)

export default api
