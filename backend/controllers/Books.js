const Book = require("../models/Book");

exports.findBooks = async (req, res) => {
  const books = await Book.find();
  res.send({ data: books });
};