let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
};

Book.prototype.info = function() {
return this.title+" by "+this.author+", "+this.pages+", "+(this.read?" read":" hasn't read");

};

function addBookToLibraryManual() {
let title = prompt("what is the title?");
let read = prompt("what is the read?");
let pages = prompt("what is the pages?");
let author = prompt("what is the author?");
let book = new Book(title, author, pages, read);
myLibrary.push(book);
render(myLibrary.length - 1);
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render(myLibrary.length - 1);
  };

// addBookToLibrary();
let book = new Book("bob", "grrm", "23", "true");
myLibrary.push(book);

render(0);
function render(book) {
  const mainContainer = document.querySelector("#mainContainer");
  console.log(myLibrary[book].info());
  let node = document.createElement("div");
  node.setAttribute("id", "book"+book)
  mainContainer.appendChild(node);
  addInfo(book, node);
  addRemoveButton(book, node);
  addReadToggle(book, node);

  // node.appendChild(list);
  // mainContainer.appendChild(node);

    // for (let key in myLibrary[i]) {
    //   // property = key + 
    //   console.log(key, myLibrary[i][key]);
    // }
};

function addInfo(book, node) {
  let list = document.createElement("ul");
  list.classList.add("bookList");
  node.appendChild(list);
  let insideNode = document.createElement("li");
  let textNode;
  let propertyList = Object.entries(myLibrary[book]);
  for(let i = 0;i<propertyList.length;i++) {
    let insideNode = document.createElement("li");
    insideNode.textContent = propertyList[i][0] + ": " + propertyList[i][1];
    // console.log(textNode)
    list.appendChild(insideNode);
  }

};

function addRemoveButton(book, node) {
  let removeButton = document.createElement("button");
  removeButton.setAttribute("id", "bookX"+book);
  removeButton.setAttribute("onclick", `removeEntry(${book})`);
  removeButton.textContent = "Delete Entry";
  node.appendChild(removeButton);
};

function addReadToggle(book, node) {
  let readToggle = document.createElement("button");
  readToggle.setAttribute("id", "bookTog"+book);
  readToggle.setAttribute("onclick", `toggleReadStatus(${book})`);
  readToggle.textContent = "Toggle Read Status";
  node.appendChild(readToggle);

};

function removeEntry(book) {
  // console.log("remove entry");
  let removedItem = document.querySelector(`#book${book}`);
  let mainContainer = document.querySelector("#mainContainer");
  removedItem.parentNode.removeChild(removedItem);

};

function toggleReadStatus(book) {
  myLibrary[book].read = !myLibrary[book].read;
  let myBook = document.getElementById("book"+book);
  let myList = myBook.querySelector("ul");
  let myRead = myList.lastElementChild;
  // console.log(myRead);
  myRead.textContent = "read: "+myLibrary[book].read;
};

function formHandle() {
  let x = document.getElementById("form1");
  let content = "";
  let label = "";
  let i;
  for (i=0; i<x.length; i++) {
    content = x.elements[i].value;
    // console.log(content);
    // text += x.elements[i].value + "<br>";
  }
  let title = x.elements[0].value;
  let author = x.elements[1].value;
  let pages = x.elements[2].value;
  let read = x.elements[3].checked;
  addBookToLibrary(title, author, pages, read);
  showForm(false);
  // console.log( text )
};

function showForm(visibility) {
  document.getElementById("formContainer").style.visibility = visibility ? "visible" : "hidden";
};