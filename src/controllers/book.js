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

export {
  create,
  get
}
