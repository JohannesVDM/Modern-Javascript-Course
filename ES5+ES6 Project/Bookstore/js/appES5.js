//2 Book constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

//UI constructor
function UI() { }

//3 Prototype
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list');
	//create table row element
	const row = document.createElement('tr');
	//insert cols 
	row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
	//
	list.appendChild(row);
}

// show alert
UI.prototype.showAlert = function (message, className) {
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

//clear fields
UI.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
}
//remove single field 
UI.prototype.deleteBook = function (target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
}

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
	}
	e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function (e) {
	if (e.target.className === 'delete') {
		const ui = new UI();
		ui.deleteBook(e.target);
		ui.showAlert('Book Removed!', 'success');
	}
	e.preventDefault();
});
