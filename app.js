const container = document.querySelector('.container');
const message = cme2(container, 'div', 'Message Area');
message.classList.add('message');
const val1 = document.querySelector('.val');
const val2 = document.querySelector('.val2');
const output = document.querySelector('.output');
const baseurl = 'http://localhost:3000/';
const button1 = document.querySelector('.btn');
const button2 = cme2(container, 'button', 'Load Books');
button2.classList.add('loadBooks');
button1.textContent = 'Create New';
button1.classList.add('selInfo');
val1.classList.add('selInfo');
val2.classList.add('selInfo');
window.addEventListener('DOMContentLoaded', getAllPosts);
button1.addEventListener('click', addPost);
button2.addEventListener('click', getAllPosts);
 
function addPost(e) {
    console.log('ready');
    e.preventDefault();
    const title = val1.value || 'default title';
    val1.value = '';
    const author = val2.value || 'default author';
    val2.value = '';
    const url = baseurl + 'posts';
    const body = {
        title: title,
        author: author
    }
    const opts = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };
    fetch(url, opts)
        .then(rep => rep.json())
        .then(data => {
            makeItem(data);
            myMessage(`New Item Made id = ${data.id}`);
        })
}
 
function myMessage(html) {
    message.innerHTML = html;
}
 
function getAllPosts(e) {
    console.log('page ready');
    const url = baseurl + 'posts';
    fetch(url)
        .then(rep => rep.json())
        .then(data => {
            pageContents(data);
        })
}
 
 
 
function pageContents(data) {
    console.log(data);
    output.innerHTML = '';
    data.forEach(el => {
        makeItem(el);
    });
}
 
 
function makeItem(el) {
    console.log(el);
    const main = cme(output, 'div', '');
    main.classList.add('box');
    const myID = cme(main, 'div', el.id);
    const in1 = cme(main, 'input', '');
    in1.value = el.title;
    const in2 = cme(main, 'input', '');
    in2.value = el.author;
    const btns = cme(main, 'div', '');
    btns.classList.add('dashboard');
    const bt1 = cme(btns, 'button', 'Update');
    const bt2 = cme(btns, 'button', 'Delete');
    bt1.addEventListener('click', (e) => {
        const json = {
            title: in1.value,
            author: in2.value
        };
        updateItem(json, el.id);
        myMessage(`Updated = ${el.id}`);
    })
    bt2.addEventListener('click', (e) => {
        myMessage(`Deleted = ${el.id}`);
        const url = baseurl + 'posts/' + el.id;
        fetch(url, {
            method: 'DELETE'
        });
        main.remove();
    })
}
 
function updateItem(json, id) {
    const url = baseurl + 'posts/' + id;
    const opts = {
        method: 'PUT',
        body: JSON.stringify(json),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    };
    fetch(url, opts)
        .then(rep => rep.json())
        .then(data => {
            console.log(data);
        })
}
 
function cme2(parent, typeEle, html) {
    const el = document.createElement(typeEle);
    parent.prepend(el);
    el.innerHTML = html;
    return el;
}
 
function cme(parent, typeEle, html) {
    const el = document.createElement(typeEle);
    parent.append(el);
    el.innerHTML = html;
    return el;
}