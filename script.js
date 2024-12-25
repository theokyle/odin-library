
const myLibrary = [];
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageCountInput = document.querySelector("#pageCount");
const isReadInput = document.querySelector("#isRead");
const addBookBtn = document.querySelector("#addBook");

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, Read: ${this.isRead}`;
    }
}

function addBookToLibrary() {
    const newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, isReadInput.value);
    myLibrary.push(newBook);
    console.log(myLibrary)
}

function displayLibrary() {

}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, true);
console.log(theHobbit.info());

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
})

