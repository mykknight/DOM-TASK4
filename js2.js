// //console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document);
// console.log(document.title);
// //document.title="123";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

///getelement byId

console.log(document.getElementById('header-title'));
var headr = document.getElementById('header-title');
var headr22 = document.getElementById('main-header');

//console.log(headr);
//headr.textContent='Hello';
//headr.innerText='tata';
// console.log(headr.textContent);
// console.log(headr.innerText);
// console.log(headr.innerHTML);
//headr.innerHTML='<h3>Hello</h3>';

headr.style.borderBottom='solid 3px #000';
headr22.style.borderBottom='solid 3px #000';

//get element by class name
var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
///items[1].textContent = 'Hello from 2';
//items[1].style.color = 'red';
items[2].style.backgroundColor = 'green';
items[0].style.fontWeight = 'bold';
items[1].style.fontWeight = 'bold';
items[2].style.fontWeight = 'bold';
items[3].style.fontWeight = 'bold';
