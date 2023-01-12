const express = require("express");
const mongoose = require("mongoose");

const bookController = require("./controllers/Books");

mongoose
  .connect("mongodb://localhost:27017/express-mongoose", {
    useNewUrlParser: true
  })
  .then(() => {
    const app = express();
    app.use(express.json());

      app.get("/books", async (req, res) => {
          const book = await Book.find();
      })
      app.listen(8000, () => {
        console.log("Server has started at port 8000");
      });
    })
    .catch(() => {
      console.log("Database connection failed!");
    });