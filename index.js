import { Book } from "./classes/Book.js";
import { Library } from "./classes/Library.js";
import { addDivider } from "./utils/divider.js";

const book1 = new Book({
  title: "Rich Dad Poor Dad",
  author: "Robert T. Kiyosaki and Sharon Lechter",
  publicationYear: 1925,
});
const book2 = new Book({
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  publicationYear: 1960,
});
const book3 = new Book({
  title: "1984",
  author: "George Orwell",
  publicationYear: 1949,
});

const myLibrary = new Library();

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

addDivider();

// Searching for books by title
const foundBooksByTitle = myLibrary.searchByTitle("1984");
console.log('Found details of books by title "1984":');
foundBooksByTitle.forEach((book) => book.getDetails());

addDivider();

// Searching for books by author
const foundBooksByAuthor = myLibrary.searchByAuthor("Harper Lee");
console.log('Found details of books by title "Harper Lee":');
foundBooksByAuthor.forEach((book) => book.getDetails());

addDivider();

console.log("Total books in library:", myLibrary.getBooksCount());

addDivider();

// Updating book details with an object parameter
book1.updateDetails({
  title: "The Great Gatsby (Updated)",
  publicationYear: 1926,
});
console.log("Updated Book Detail for Book 1:");
book1.getDetails();
