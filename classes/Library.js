import { Book } from "./Book.js";

export class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    if (book instanceof Book) {
      this.books.push(book);
    } else {
      throw new TypeError(
        "Type Error: Only the instance of Book class can be added to the library."
      );
    }
  }

  searchByTitle(title) {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  searchByAuthor(author) {
    return this.books.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  getBooksCount() {
    return this.books.length;
  }
}
