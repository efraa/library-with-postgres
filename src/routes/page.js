import { Router } from 'express'
import { create } from '../controllers/page'
const api = Router()

// @Desc    Create page
// @Access  Private.
api.post('/:book/pages', create)

export default api
