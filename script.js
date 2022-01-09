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
    console.log(book)
     myLibrary.push(book)

    hideForm()  // Hide the form after submit

    displayBooks(book)
    removeElement(book)
    console.log(typeof book.isRead)
}
//function to add books to the browser
const tbody = document.querySelector('tbody')
function displayBooks(book){
    const tr = document.createElement('tr')
    const tdtitle = document.createElement('td')
    const tdauthor = document.createElement('td')
    const tdpages = document.createElement('td')
    const tdstatus = document.createElement('td')
    const  tdchange = document.createElement('td')
    const tdremove = document.createElement('td')
    tdremove.classList.add('remove')

    tdtitle.innerText = book.title
    tdauthor.innerText = book.author
    tdpages.innerText = book.pages
    tdstatus.innerText = book.isRead
    
    if(book.isRead =='I have read it'){
        tdchange.innerText = '\u2714'
    }else{
        tdchange.innerText = '\u2716'
    }
    tdremove.innerText = '\u2716'
    
    tr.appendChild(tdtitle)
    tr.appendChild(tdauthor)
    tr.appendChild(tdpages)
    tr.appendChild(tdstatus)
    tr.appendChild(tdchange)
    tr.appendChild(tdremove)

    tbody.appendChild(tr)

}

//function to remove books from the browser
function removeElement(){
    const removeButtons = document.querySelectorAll('.remove')
    for(let remove of removeButtons){
        remove.addEventListener('click',e=>{
            let parentElement = remove.parentElement
            parentElement.remove()
            console.log(parentElement)
        })

    }

}
//change read status
function changeReadStatus(book){
    if(book.isRead ==='I have read it'){
        book.isRead === 'not read it yet'
    }
    book.isRead = 'I have read it'
}