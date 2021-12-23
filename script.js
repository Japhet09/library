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

*/

let body = document.querySelector('body')
const card = document.createElement('div') // for displaying books
card.setAttribute('class','card')

body.appendChild(card)

/*This display function didnt work, it was repeating the display of books which were 
already displayed

function displayBooks(){
    myLibrary.forEach(books =>{
        let book = document.createElement('p')
        book.setAttribute('class', 'book')
        book.innerText = books.info()
        card.appendChild(book)

    })
}
    */

function displayBooks(){
    //a paragraph that hold the book info
    let book = document.createElement('p')
    book.setAttribute('class', 'book-display')
    book.innerText = myLibrary[myLibrary.length-1].info()
    //a unique identifier for each book displayed(data attribute)
    book.dataset.index  = myLibrary.length
    card.appendChild(book)

   // a button for each book displayed
    let remove = document.createElement('button')
    remove.setAttribute('class', 'remove')
    remove.innerText = 'REMOVE'
    book.appendChild(remove)

    //Remove the book on display but its still in the myLibrary
    remove.addEventListener('click',()=>{
        card.removeChild(book)
        //This also works
        // book.remove()
    })

}



const newBook = document.createElement('button')
newBook.setAttribute('class', 'newbook')
newBook.innerText = 'NEW BOOK'
body.prepend(newBook)

let form = document.querySelector('form')

//function to hide  the form
function hideForm(){
    form.style.display = 'none'
}
hideForm()  // Hide form on load

// opens the hidden form for user to enter data
newBook.addEventListener('click', addBookToLibrary)


//Function to display the form and reset
function addBookToLibrary(){
    form.style.display = 'flex'
    form.reset() //to clear the form for the next entries
   
}

const submit = document.querySelector('.submit') // button to submit the form

//submit the generated book
submit.addEventListener('click', submitBook)

//function that generate the object using the Book constructor with info from the form
function submitBook(event){
    event.preventDefault() // prevent default behavior of submitting the form 
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    
    let isReadbuttons = document.querySelectorAll('input[type=radio]') 
    //This give us a nodelist for the two buttons
    let isRead = ''
    // assign the checked button to the above variable
   isReadbuttons.forEach(button =>{
       if (button.checked){
           isRead = button.value
       }
   })

   // Instantiate a book using the Book constructor
    let book = new Book(title, author, pages, isRead)
     myLibrary.push(book)

     displayBooks() // display the book
     
     hideForm()  // Hide the form after submit

}

