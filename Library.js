//Add an empty Library array
var myLibrary = [];

//Add a Book constructor
class Book {
  constructor(
    title,
    author,
    pages,
    read
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

//Look for books in the myLibrary and add it if it's not
function inLibrary(book) {
  if(!myLibrary.includes(book)){
    myLibrary.push(book);
  }
}

//Add add book button
var addBookButton = document.getElementsByClassName("add-button")[0];

addBookButton.onclick = function() {
  
//Create input element for title
  var titleInput = document.createElement("input");
  titleInput.id = "title";
  titleInput.setAttribute("required", "");
  titleInput.style.marginBottom = "10px";
  titleInput.style.borderRadius = "15px";
  titleInput.style.textAlign = "center";
  titleInput.style.alignSelf = "center";
  titleInput.type = "text";
  titleInput.addEventListener("blur", function(){
    if(!titleInput.value){
      titleInput.style.border = "2px solid red";
    } else {
      titleInput.style.border = "2px solid green";
    }
  });
  titleInput.placeholder = "Book Title?"

//Create input element for author
  var authorInput = document.createElement("input");
  authorInput.id = "author";
  authorInput.setAttribute("required", "");
  authorInput.style.marginBottom = "10px";
  authorInput.style.borderRadius = "15px";
  authorInput.style.textAlign = "center";
  authorInput.style.alignSelf = "center";
  authorInput.type = "text";
  authorInput.addEventListener("blur", function() {
    if(!authorInput.value){
      authorInput.style.border = "2px solid red";
    } else {
      authorInput.style.border = "2px solid green";
    }
  });
  authorInput.placeholder = "Book Author?";

//Create input element for pages
  var pagesInput = document.createElement("input");
  pagesInput.id = "pages";
  pagesInput.setAttribute("required", "");
  pagesInput.style.marginBottom = "10px";
  pagesInput.style.borderRadius = "15px";
  pagesInput.style.textAlign = "center";
  pagesInput.style.alignSelf = "center";
  pagesInput.type = "number";
  pagesInput.addEventListener("blur", function() {
    if(!pagesInput.value){
      pagesInput.style.border = "2px solid red";
    } else {
      pagesInput.style.border = "2px solid green";
    }
  });
  pagesInput.placeholder = "Book Pages?";

//Create input element for read
  var readInput = document.createElement("input");
  readInput.id = "read";
  readInput.style.marginBottom = "10px";
  readInput.style.alignSelf = "center";
  readInput.type = "checkbox";
  readInput.textContent = "Read?"

//Create a new div to hold all the elements
  var newDiv = document.createElement("div");

  newDiv.style.display = "flex";
  newDiv.style.flexDirection = "column";
  newDiv.style.padding = "10px"
  newDiv.style.border = "2px solid rgba(0, 0, 0, 0.5)";
  newDiv.style.borderRadius = "15px";

  newDiv.appendChild(titleInput);
  newDiv.appendChild(authorInput);
  newDiv.appendChild(pagesInput);
  newDiv.appendChild(readInput);

  //Add a save button
var saveButton = document.createElement("button");
saveButton.innerHTML = "Save";

//Make the save button work
saveButton.addEventListener("click", function(){
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("read").checked;

  var errorMessage = "Please fill out the following required fields: ";
  if (!title) {
    errorMessage += "Title, ";
  }
  if (!author) {
    errorMessage += "Author, ";
  }
  if (!pages) {
    errorMessage += "Pages, ";
  }
  if (errorMessage !== "Please fill out the following required fields: ") {
    alert(errorMessage.slice(0, -2));
    return;
  }

  //Create a new Book object and push it to the MyLibrary array
  var book = new Book(title, author, pages, read);
  book.read = read;
  inLibrary(book);

  //
  var titleDiv = document.createElement("div");
  titleDiv.style.marginBottom = "10px";
  titleDiv.innerHTML = "Title: " + title;

  var authorDiv = document.createElement("div");
  authorDiv.style.marginBottom = "10px";
  authorDiv.innerHTML = "Author: " + author;

  var pagesDiv = document.createElement("div");
  pagesDiv.style.marginBottom = "10px";
  pagesDiv.innerHTML = "Pages: " + pages;

  var readDiv = document.createElement("div");
  readDiv.style.marginBottom = "10px";
  readDiv.innerHTML = "Read: " + read;

  newDiv.innerHTML = "";
  newDiv.appendChild(titleDiv);
  newDiv.appendChild(authorDiv);
  newDiv.appendChild(pagesDiv);
  newDiv.appendChild(readDiv);

  //Make delete button
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";

  //Make Delete button work
  deleteButton.addEventListener(("click"), () => {
    var index = myLibrary.findIndex(function(book){
      return book.title === title && book.author === author && book.pages === pages && book.read === read;
    });

    if(index !== -1) {
      myLibrary.splice(index, 1);
    }

    newDiv.parentNode.removeChild(newDiv);
  });

  deleteButton.style.margin = "5px";
  newDiv.appendChild(deleteButton);

  //Make toggle Read button
  var toggleRead = document.createElement("button");
  toggleRead.innerHTML = "Toggle Read";

  //Make read button work
  toggleRead.addEventListener(("click"), () => {
    if(readDiv.innerHTML === "Read: " + read){
      readDiv.innerHTML = "Read: " + !read;
      read = !read;
    } else (readDiv.innerHTML = "Read: " + read)

    console.log(read);
  });

  toggleRead.style.margin = "5px";
  newDiv.appendChild(toggleRead);

});

newDiv.appendChild(saveButton);

//Append the newDiv to the HTML
  document.getElementById("main-wrapper").appendChild(newDiv);

};