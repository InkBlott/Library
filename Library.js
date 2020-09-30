let myLib = [];
let bookHolder;
const itC = document.getElementById('theLibTable');
const titleGetter = document.getElementById('titleF');
const authorGetter = document.getElementById('authorF');
const pageGetter = document.getElementById('pageF');
const inputDisplay = document.getElementById('userIn');


function book(author, title, pages, read) {
    this.author = author;
    this.pages = pages;
    this.title = title;
    this.read = false;
}

function openAdd(){
    if(inputDisplay.style.display === "none"){
        inputDisplay.style.display = "block";
    } else {
        inputDisplay.style.display = "none";
    }
}

function addBook(){
    // let x = document.createElement('div');
    // x.classList.add('line')
    // itC.appendChild(x);
    store();
    render();   
}

function store(){
    bookHolder = new book(authorGetter.value, titleGetter.value, pageGetter.value, false );
    authorGetter.value = '';
    titleGetter.value = '';
    pageGetter.value='';
    inputDisplay.style.display='none';  
    myLib.push(bookHolder);     
    ref.push(bookHolder);
}

function render() {

        let x = document.createElement('div');
        x.classList.add('itemContainer');

        let y = document.createElement('div');
        y.classList.add('line');

        let authorItem = document.createElement('div');
        authorItem.classList.add('item');
        authorItem.innerText = bookHolder.author;

        let titleItem = document.createElement('div');
        titleItem.classList.add('item');
        titleItem.innerText = bookHolder.title;

        let pageItem = document.createElement('div');
        pageItem.classList.add('item');
        pageItem.innerText = bookHolder.pages;

        let buttnRead = document.createElement('button');
        buttnRead.innerText = 'unread';
        buttnRead.classList.add('readBtn');
        buttnRead.id = (myLib.length - 1);
        buttnRead.onclick = readStatus;
    

        let buttnDel = document.createElement('button');
        buttnDel.innerText = 'delete';
        buttnDel.classList.add('readBtn');
        buttnDel.id = (myLib.length - 1);
        buttnDel.onclick = deleteBook;

        x.appendChild(y);
        x.appendChild(titleItem);
        x.appendChild(authorItem);
        x.appendChild(pageItem);
        x.appendChild(buttnRead);
        x.appendChild(buttnDel);

        itC.appendChild(x);
}

function readStatus() {
    if (myLib[this.id].read === true){
        myLib[this.id].read = false;
        this.innerText = 'Unread';
    } else {
        myLib[this.id].read = true;
        this.innerText = 'Read';
    }

}

function deleteBook(){
    myLib.splice(this.id, 1);
    this.parentNode.remove();
}

