const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const BookSchema = new Schema(
  {
    title: String,
    description: String,
    autor: String,
    rating: Number,
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Book = model("Book", BookSchema);

module.exports = Book;
