function Book(title, author, pages, isRead) {//constructor function
    this.title = title
    this.author = author
    this.pages = pages

    if (isRead==='Yes'){
        this.isRead = 'I have read it'
    } else {
        this.isRead = ' not read yet'
    }
   //Same as above if statement
     //isRead==='Yes'?this.isRead = 'I have read it':this.isRead = 'not read yet'
}

Book.prototype.info = function () { // info method inheritable by all instances of Book Constructor
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
}

let bornACrime = new Book('Born A Crime', 'Trevor Noah', 165, 'Yes')


let myLibrary = []

function addBookToLibrary() {
    let title = prompt('Whats the title of the book?')
    let author = prompt('Who is the author?')
    let pages = parseInt(prompt('How many pages?'))
    let isRead = prompt('Have you read the book? Yes or No')
    let book = new Book(title, author, pages, isRead)
    myLibrary.push(book)

}
for(let i=0; i<3; i++){
addBookToLibrary()}


