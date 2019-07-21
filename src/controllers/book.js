import Book from '../models/book'

const create = async (req, res) => {
  try {
    const { name, desc, isbn, publisher, publicDate, language } = req.body
    const book = await Book.create({
      name,
      desc,
      isbn,
      publisher,
      publicDate,
      language
    })

    if (book) res.status(201).send({ book })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const get = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id)
    if (!book) return res.status(404).send({ msg: 'Book not found' })
    res.status(200).send({ book })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const list = async (req, res) => {
  try {
    const perPage = parseInt(req.query.limit) || 5
    const page = parseInt(req.query.page) || 1
    const books = await Book.findAndCountAll({
      offset: ((perPage * page) - perPage),
      limit: perPage
    })
    const pages = Math.ceil(books.count / perPage)
    res.status(200).send({ books: books.rows, allBooks: books.count, pages })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.destroy({
      where: {
        id
      }
    })

    if (!book) return res.status(404).send({ msg: 'Book not found' })
    return res.status(200).send({ msg: 'the book has been removed' })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params
    const update = req.body

    const findBook = await Book.findOne({
      where: {
        id
      }
    })
    if (!findBook) res.status(404).send({ msg: 'Book not found' })
    const book = await findBook.update(update)

    if (!book) res.status(404).send({ msg: 'The book has not been updated' })
    res.status(200).send({ book })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

export {
  create,
  get,
  list,
  remove,
  update
}
