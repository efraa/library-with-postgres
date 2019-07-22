import sanitizeHtml from 'sanitize-html'
import htmlToText from 'html-to-text'
import Page from '../models/page'
import Book from '../models/book'

const create = async (req, res) => {
  try {
    const { book } = req.params
    const findBook = await Book.findByPk(book)
    if (!findBook) return res.status(404).send({ msg: 'Book not found' })

    const count = await Page.count({
      where: {
        bookId: book
      }
    })
    const content = req.body.content ? sanitizeHtml(req.body.content) : null
    const page = await Page.create({
      bookId: book,
      content,
      prevPage: count,
      nextPage: count + 2,
      page: count + 1
    })
    const bookUpdate = await findBook.update({ paperback: count + 1 })
    if (!bookUpdate) res.status(404).send({ msg: 'The book has not been updated' })

    res.status(201).send({ page })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const get = async (req, res) => {
  try {
    const { book, page } = req.params
    const { format } = req.query
    const findBook = await Book.findByPk(book)
    if (!findBook) return res.status(404).send({ msg: 'Book not found' })
    const findPage = await Page.findByPk(page)
    if (!findPage) return res.status(404).send({ msg: 'Page not found' })

    if (format === 'text') {
      findPage.set('content', htmlToText.fromString(findPage.get('content')))
    }
    res.status(200).send({ page: findPage })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const list = async (req, res) => {
  try {
    const { book } = req.params
    const { format } = req.query
    const findBook = await Book.findByPk(book)
    if (!findBook) return res.status(404).send({ msg: 'Book not found' })

    const perPage = parseInt(req.query.limit) || 5
    const page = parseInt(req.query.page) || 1

    const findPages = await Page.findAndCountAll({
      where: {
        bookId: book
      },
      offset: ((perPage * page) - perPage),
      limit: perPage
    })

    if (format === 'text') {
      findPages.rows.forEach(page => page.set('content', htmlToText.fromString(page.get('content'))))
    }
    const allPages = Math.ceil(findPages.count / perPage)
    res.status(200).send({ pages: findPages.rows, allPages })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

export {
  create,
  get,
  list
}
