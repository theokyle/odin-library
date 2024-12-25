
function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pageCount} pages, Read: ${this.isRead}`;
    }
}

const theHobbit = new Book('The Hobbit', 'JRR Tolkien', 295, true);
console.log(theHobbit.info());

