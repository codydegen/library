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
  // node.appendChild(list);
  // mainContainer.appendChild(node);

    // for (let key in myLibrary[i]) {
    //   // property = key + 
    //   console.log(key, myLibrary[i][key]);
    // }

};

function formHandle() {
  let x = document.getElementById("form1");
  let content = "";
  let label = "";
  let i;
  for (i=0; i<x.length; i++) {
    content = x.elements[i].value;
    console.log(content);
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