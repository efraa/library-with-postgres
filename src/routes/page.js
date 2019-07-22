import { Router } from 'express'
import { create, get, list, remove } from '../controllers/page'
const api = Router()

// @Desc    Create page
// @Access  Private.
api.post('/:book/pages', create)

// @Desc     Get all pages from book
// @Access   Public
api.get('/:book/pages', list)

// @Desc    Get Page by ID
// @Access  Public
api.get('/:book/pages/:page', get)

// @Desc     DELETE page
// @Access   Private
api.delete('/:book/pages/:page', remove)

export default api
