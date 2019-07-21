import { Router } from 'express'
import { create, get } from '../controllers/book'
const api = Router()

// @Desc    Create book
// @Access  Private.
api.post('/', create)

// @Desc    Get book by ID
// @Access  Public
api.get('/:id', get)

export default api
