import sanitizeHtml from 'sanitize-html'
// import htmlToText from 'html-to-text'
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

export {
  create
}
