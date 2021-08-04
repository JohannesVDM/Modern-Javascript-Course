class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
    //create table row element
    const row = document.createElement('tr');
    //insert cols 
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>`;
    list.appendChild(row);
  }

  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  showAlert(message, className) {
    //create div
    const div = document.createElement('div');
    // add classes
    div.className = `alert ${className}`;
    //add text 
    div.appendChild(document.createTextNode(message));
    // get parent 
    const container = document.querySelector('#container');
    // get form 
    const form = document.querySelector('#book-form');
    //insert alert
    container.insertBefore(div, form);
    //timeout after 3 seconds 
    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}

console.log(localStorage);


//Local storage class
class Store {

  // Static means the method is linked to the method and not to the instance
  //fetch from local
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  //display out of local
  static displayBooks() {
    const books = Store.getBooks();

    books.forEach(function (book) {
      const ui = new UI;

      ui.addBookToList(book);
    });
  }

  //add book per click to local
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  //remove with click x
  static removeBook(isbn) {
    //remove book from local by isbn
    console.log(isbn);
    const books = Store.getBooks();

    books.forEach(function (book, index) {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// display books from local 
document.addEventListener('DOMContentLoaded', Store.displayBooks);

//2 EVENT LISTENER
document.getElementById('book-form').addEventListener('submit', function (e) {
  //1 get form values
  const uiTitle = document.getElementById('title').value;
  const uiAuthor = document.getElementById('author').value;
  const uiIsbn = document.getElementById('isbn').value;
  //2 Send values to class
  const book = new Book(uiTitle, uiAuthor, uiIsbn);
  //Instantiate book method
  const ui = new UI();
  //Validate 
  if (uiTitle === '' || uiAuthor === '' || uiIsbn === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    //3 add book to list 
    ui.addBookToList(book);
    //clear fields
    ui.clearFields(book);

    Store.addBook(book);
  }
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target.className === 'delete') {
    const ui = new UI();
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
    //remove from local storage 
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  }
  e.preventDefault();
});
