import  Book  from '../model/book.mjs';

const getBooks = async (req, res) => {
  const bookData = await Book.find();
  res.send(bookData);
};

const getBooksAnalise = async (req, res) => {
  const authorBook = req.body.book;
  console.log(authorBook)
  const bookData = await Book.find({title:{$in:authorBook}});
  res.send(bookData);
};

export  default { getBooks, getBooksAnalise}
