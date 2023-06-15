

var addBook = document.getElementById('addBook')
var myForm = document.getElementById('myForm')
var btn = document.getElementById('btn')
var dataContainer = document.getElementById('displayData')

addBook.addEventListener('click', function () {
  if (myForm.style.display === 'none') {
    myForm.style.display = 'block'
    addBook.innerHTML = 'close the form'
    btn.style.display = 'block'
  } else {
    myForm.style.display = 'none'
    addBook.innerHTML = 'fill the form'
    btn.style.display = 'none'
  }
})


function Book (title,Author,pages_nbr) {
  this.title= title,
  this.Author= Author,
  this.pages_nbr=pages_nbr,
  this.read=false
}



let myLibrary = [];

//get data from form
btn.addEventListener('click', function (event) {
  event.preventDefault();
  var title = document.getElementById('bk-Title').value
  var Author = document.getElementById('tp-Author').value
  var pages_nbr = document.getElementById('Pg-nbr').value

  var t_title = document.getElementById('td-title')
  var t_author = document.getElementById('td-author')
  var t_pg = document.getElementById('td-pg')

var book=new Book(title,Author,pages_nbr)
myLibrary.push(book);

title="";
Author="";
pages_nbr="";



  // t_title.innerHTML = `${this.title}`;
  // t_author.innerHTML = `${this.Author}`;
  // t_pg.innerHTML = `${this.pages_nbr}`;

  addBookToLibrary();

});

function changeReadStatus(index){
  myLibrary[index].read=!myLibrary[index].read;
  addBookToLibrary();
}

function removeBook(index){
  myLibrary.splice(index,1);
  addBookToLibrary();
}


function addBookToLibrary() {
  dataContainer.innerHTML = ""; // Clear previous content

  for (var i = 0; i < myLibrary.length; i++) {
    var book = myLibrary[i];

// 




    var bookContainer = document.createElement("div");




    
    bookContainer.innerHTML = `
    <table border="1">
      <tr>
      <th><h3>title</h3></th>
      <th><h3>author</h3></th>
      <th><h3>pages</h3></th>
    </tr>

    <tr>
      <td><h5>${book.title}</h5></td>
      <td><h5>${book.Author}</h5></td>
      <td><h5>${book.pages_nbr}</h5></td>
      <td><p>Status: ${book.read ? "Read" : "Unread"}</p></td>
      <button onclick="changeReadStatus(${i})">${book.read ? "Mark Unread" : "Mark Read"}</button>
    </tr>

      <tr>
      
      <td><p>Author: ${book.Author}</p></td>
      <td><p>Status: ${book.read ? "Read" : "Unread"}</p></td>
      <td><button onclick="changeReadStatus(${i})">${book.read ? "Mark Unread" : "Mark Read"}</button></td>
      <td><button onclick="removeBook(${i})">Remove</button></td>
      </tr>
    </table>`;

    dataContainer.appendChild(bookContainer);
  }
}




// let myLibrary = []

// function Book(title,author,pg_nbr) {
//   // the constructor...
//   this.title=document.getElementById("bk-Title").value;
//   this.author=document.getElementById("tp-Author").value;
//   this.pg_nbr=document.getElementById("Pg-nbr").value;
// }

// function addBookToLibrary() {
//   // do stuff here
//   myLibrary.push(Book);

// }
