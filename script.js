
const myLibrary = [];
const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, true);

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pageCountInput = document.querySelector("#pageCount");
const isReadInput = document.querySelector("#isRead");
const addBookBtn = document.querySelector("#addBook");
const libraryContainer = document.querySelector("#libraryContainer");

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
    const newBook = new Book(titleInput.value, authorInput.value, pageCountInput.value, isReadInput.checked);
    myLibrary.push(newBook);
    console.log(myLibrary)
}

function displayLibrary() {
libraryContainer.innerHTML = "";
const libraryTable = document.createElement("table");
libraryContainer.appendChild(libraryTable);
libraryTable.innerHTML = `<tr>
    <th>Book Title</th>
    <th>Author</th>
    <th>Page Count</th>
    <th>Read?</th>
    <th></th>
    </tr>`;
myLibrary.forEach((book, index) => {
    libraryTable.innerHTML += `<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pageCount}</td>
    <td id="book${index}-isRead"><span>No</span></td>
    <button onclick="markAsRead(${index})">Mark as Read</button></tr>`;
    console.log(book.isRead)
    if(book.isRead) {
        markAsRead(index);
    }
});
}

function markAsRead(index) {
    document.getElementById(`book${index}-isRead`).classList.toggle("markRead");
}

function clearInputs() {
    titleInput.value = "";
    authorInput.value = "";
    pageCountInput.value = "";
    isReadInput.value = false;
}

addBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    addBookToLibrary();
    displayLibrary();
    clearInputs();
})

myLibrary.push(theHobbit);
displayLibrary();

