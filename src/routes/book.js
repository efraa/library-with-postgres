import { Router } from 'express'
import { create, get, list, remove } from '../controllers/book'
const api = Router()

// @Desc    Create book
// @Access  Private.
api.post('/', create)

// @Desc     Get all books
// @Access   Public
api.get('/', list)

// @Desc    Get book by ID
// @Access  Public
api.get('/:id', get)

// @Desc     DELETE book by ID
// @Access   Private
api.delete('/:id', remove);

export default api
