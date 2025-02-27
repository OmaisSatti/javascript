// 3. Build a Library System
// Create a Book class with title, author, and isAvailable properties.
// Add a method borrowBook() that changes isAvailable to false.
// Create a Library class that stores multiple books in an array.
// Add methods to addBook(), removeBook(), and findBook(title).

class Book {
    constructor(title, author, isAvailable) {
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`📖 You borrowed "${this.title}" by ${this.author}.`);
        } else {
            console.log(`❌ Sorry, "${this.title}" is currently not in stock.`);
        }
    }
}

class Library {

    constructor() {
        this.books = []
    }

    addBook(book) {
        this.books.push(book);
        console.log(`✅ Book "${book.title}" added to the library.`);
    }

    removeBook(title) {
        let filteredBook = this.books.filter((book) => book.title !== title);
        this.books = filteredBook;
        console.log(`🗑️ Book "${title}" removed from the library.`);
    }

    findBook(title) {
        let book = this.books.find((book) => book.title === title);
        return book;
    }
}

let b1 = new Book('javax', 'jon', true);
let b2 = new Book('javay', 'don', false)
let b3 = new Book('javaz', 'man', true)


let lib = new Library();
lib.addBook(b1);
lib.addBook(b2);
lib.addBook(b3);

console.log(lib.findBook('javaz'))