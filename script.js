function Book (title, author,pages, isRead=true){ //constructor function
    this.title = title
    this.author = author
    this.pages = pages
    isRead?this.isRead = 'I have read it':this.isRead = 'not read yet'


    }

Book.prototype.info = function(){ // info method inheritable by all instances of Book constructor
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
    };

let myLibrary = [] // array to store all the book objects
function addBookToLibrary(title,author,pages,isRead){
    let book1 = new Book (title, author,pages,isRead)
    myLibrary.push(book1)
    return myLibrary
 
}
addBookToLibrary('Atomic Habits','James Clear',184, false)
addBookToLibrary('The Alchemist', 'Paulo Coelho', 146, true)
addBookToLibrary('Black Beauty', 'Anna sewel', 55,true)
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 231, false)

function displayBooks(library){
    for(i=0;i<=library.length;i++){
        console.table(library[i])
    }
}
