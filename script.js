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
/*
function addBookToLibrary() {
    let title = prompt('Whats the title of the book?')
    let author = prompt('Who is the author?')
    let pages = parseInt(prompt('How many pages?'))
    let isRead = prompt('Have you read the book? Yes or No')
    let book = new Book(title, author, pages, isRead)
    myLibrary.push(book)

}
for(let i=0; i<2; i++){
addBookToLibrary()}

*/

let body = document.querySelector('body')
const card = document.createElement('div') // for displaying books
card.setAttribute('class','card')

body.appendChild(card)

function displayBooks(){
    for(i=0; i<myLibrary.length; i++){ //display eanch book on its paragraph
        let book = document.createElement('p')
        book.setAttribute('class', 'book')
        book.innerText = myLibrary[i].info()
        card.appendChild(book)
    }
}

displayBooks()

const newBook = document.createElement('button')
newBook.setAttribute('class', 'newbook')
newBook.innerText = 'NEW BOOK'
body.prepend(newBook)

let form = document.querySelector('form')

//function to hide  the form
function hideForm(){
    form.style.display = 'none'
}

// 
newBook.addEventListener('click', addBookToLibrary)


//Function to display the form and reset
function addBookToLibrary(){
    form.style.display = 'flex'
    form.reset() //to clear the form for the next entries
   
}

const submit = document.querySelector('.submit') // button to submit the form
submit.addEventListener('click', submitBook)

//function that generate the object using the Book constructor with info from the form
function submitBook(event){
    event.preventDefault()
    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    let isRead = document.querySelectorAll('input[type=radio]')

    let book = new Book(title.value, author.value, pages.value, isRead.value)
     myLibrary.push(book)
     
     hideForm()  

}