import Author from '../model/author.mjs';
import mongodb from 'mongodb';
import axios from "axios"

const ObjectID = mongodb.ObjectID

const getAuthor = async (req, res) => {
  const data = await Author.find();
  res.send(data)
};

const addAuthor = async (req, res) => {
  let author = new Author({
    id: req.body.id,
    name: req.body.name,
    book: req.body.book
  });
  await Author.create(author)
};

const getById = async (req, res) => {
  if (!ObjectID.isValid(req.params.id)) {
    return res.status(400).send('No recort  given  to  Id:' + `${req.params.id}`)
  }
  Author.findById(req.params.id, async (err, data) => {
    try {
      const response = axios.post('http://localhost:4000/book/analise', data);
      res.send(response.data)
    } catch (err) {
      res.send(err.message);
    }
  });
};

export default {
  addAuthor, getAuthor, getById
}


