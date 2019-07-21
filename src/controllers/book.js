import Book from '../models/book'

const create = async (req, res) => {
  try {
    const { name, desc, isbn, publisher, publicDate, language, code } = req.body
    const book = await Book.create({
      name,
      desc,
      isbn,
      publisher,
      publicDate,
      language,
      code
    })

    if (book) res.status(201).send({ book })
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

export {
  create
}
