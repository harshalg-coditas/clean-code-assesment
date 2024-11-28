export class Book {
  constructor({ title = "", author = "", publicationYear = 0 } = {}) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getDetails() {
    console.table({
      Title: this.title,
      Author: this.author,
      Published: this.publicationYear
    });
  }

  updateDetails({ title, author, publicationYear } = {}) {
    if (title !== undefined) {
      this.title = title;
    }
    if (author !== undefined) {
      this.author = author;
    }
    if (publicationYear !== undefined) {
      this.publicationYear = publicationYear;
    }
  }
}
