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

let myLibrary = []


let body = document.querySelector('body')
const card = document.createElement('div') // for displaying books
card.setAttribute('class','card')

body.appendChild(card)

//This display function didnt work, it was repeating the display of books which were  already displayed

function displayBooks(){
}
    

const newBook = document.createElement('button')
newBook.setAttribute('class', 'newbook')
newBook.innerText = 'ADD BOOK'
body.appendChild(newBook)

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

     //displayBooks()
     
     hideForm()  // Hide the form after submit

}

