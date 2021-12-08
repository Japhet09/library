function Book(title, author,pages, isRead=true){
    this.title = title
    this.author = author
    this.pages = pages
    isRead?this.isRead = 'I have read it':this.isRead = 'not read yet'

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`
    }
    }


