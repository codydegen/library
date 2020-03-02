

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return this.title + " by " + this.author + ", " + this.pages + ", " + (this.read ? " read" : " hasn't read");
  }

  toggleRead() {
    this.read = !(this.read);
  }

  get id() {
    return this._id;
  }

  set id(newID) {
    this._id = newID;
  }

};

class UI {
  static render(book) {
    const mainContainer = document.querySelector("#mainContainer");
    console.log(BookContainer.myLibrary[book].info());
    let node = document.createElement("div");
    BookContainer.myLibrary[book].id = "book"+book;
    node.setAttribute("id", BookContainer.myLibrary[book].id);
    mainContainer.appendChild(node);
    this.addButtons(book, node);
  };

  static showForm(visibility) {
    document.getElementById("formContainer").style.visibility = visibility ? "visible" : "hidden";
  };

  static addInfo(book, node) {
    let list = document.createElement("ul");
    list.classList.add("bookList");
    node.appendChild(list);
    let insideNode = document.createElement("li");
    let textNode;
    let propertyList = Object.entries(BookContainer.myLibrary[book]);
    for(let i = 0;i<propertyList.length-1;i++) {
      let insideNode = document.createElement("li");
      insideNode.textContent = propertyList[i][0] + ": " + propertyList[i][1];
      // console.log(textNode)
      list.appendChild(insideNode);
    }
  };
  
  static addRemoveButton(book, node) {
    let removeButton = document.createElement("button");
    removeButton.setAttribute("id", "bookX"+book);
    removeButton.setAttribute("onclick", `removeEntry(${book})`);
    removeButton.textContent = "Delete Entry";
    node.appendChild(removeButton);
  };
  
  static addReadToggle(book, node) {
    let readToggle = document.createElement("button");
    readToggle.setAttribute("id", "bookTog"+book);
    readToggle.setAttribute("onclick", `BookContainer.toggleReadStatus(myLibrary[${book}])`);
    readToggle.textContent = "Toggle Read Status";
    node.appendChild(readToggle);
  };

  static addButtons(book, node) {
    this.addInfo(book, node);
    this.addRemoveButton(book, node);
    this.addReadToggle(book, node);
  };
};

class BookContainer {

  static myLibrary = [];

  static addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    UI.render(myLibrary.length - 1);
    };

  static addBookToLibraryManual() {
    let title = prompt("what is the title?");
    let read = prompt("what is the read?");
    let pages = prompt("what is the pages?");
    let author = prompt("what is the author?");
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    UI.render(myLibrary.length - 1);
    };

  static removeEntry(book) {
    // console.log("remove entry");
    let removedItem = document.querySelector(`#book${book}`);
    let mainContainer = document.querySelector("#mainContainer");
    removedItem.parentNode.removeChild(removedItem);
  };

  static formHandle() {
    let form = document.getElementById("form1");
    let i, content;
    for (i=0; i<form.length; i++) {
      content = form.elements[i].value;
    }
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let pages = form.elements[2].value;
    let read = form.elements[3].checked;
    BookContainer.addBookToLibrary(title, author, pages, read);
    UI.showForm(false);
  };

  static toggleReadStatus(book) {
    book.toggleRead();
    let myBook = document.getElementById("book"+book);
    let myList = myBook.querySelector("ul");
    let myRead = myList.lastElementChild;
    // console.log(myRead);
    myRead.textContent = "read: "+myLibrary[book].read;
  };
}


let book = new Book("bob", "grrm", "23", "true");
BookContainer.myLibrary.push(book);

UI.render(0);








