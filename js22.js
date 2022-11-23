// //console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document);
// console.log(document.title);
// //document.title="123";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

///getelement byId

// console.log(document.getElementById('header-title'));
// var headr = document.getElementById('header-title');
// var headr22 = document.getElementById('main-header');
console.log(1);
//console.log(headr);
//headr.textContent='Hello';
//headr.innerText='tata';
// console.log(headr.textContent);
// console.log(headr.innerText);
// console.log(headr.innerHTML);
//headr.innerHTML='<h3>Hello</h3>';

// headr.style.borderBottom='solid 3px #000';
// headr22.style.borderBottom='solid 3px #000';

//get element by class name
 //var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello from 2';
//items[1].style.color = 'red';
//  items[2].style.backgroundColor = 'green';
//   items[0].style.fontWeight = 'bold';
//  items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';
//  items[3].style.fontWeight = 'bold';

//getelementbytagname

// var li = document.getElementsByTagName('li');
//  console.log(li);
//  console.log(li[1]);
//  li[1].textContent = 'Hello from 2';
//  li[4].style.color = 'red';
//  li[2].style.backgroundColor = 'green';
//  li[0].style.fontWeight = 'bold';
//  li[1].style.fontWeight = 'bold';
//  li[2].style.fontWeight = 'bold';
//  li[3].style.fontWeight = 'bold';

// Query selector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 8px red';

// var input = document.querySelector('input');
// input.value='Hello i am here';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'blue';

//  var lastitem = document.querySelector('.list-group-item:nth-child(2)');
//  lastitem.style.backgroundColor = 'green';

//  var thirditem = document.querySelector('.list-group-item:nth-child(3)');
//  thirditem.style.display='none';

// // queryselectorALL//
// var titles = document.querySelectorAll('.title');

// console.log(titles);

// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

//Traversing the DOM//

var itemlist = document.querySelector('#items');
//parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.parentNode.parentNode.style.backgroundColor = 'purple';

//parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = 'purple';

//childnode
//console.log(itemlist.childNodes);

console.log(itemlist.children);
itemlist.children[1].style.backgroundColor = 'violet';

// //firstchild
// console.log(itemlist.firstChild);

// //firstelementchild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='HEllo';

//lastchild
// console.log(itemlist.lastChild);

// //firstelementchild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='HEllo';

//nextsibling
// console.log(itemlist.nextSibling);
// //nextElementSibling
// console.log(itemlist.nextElementSibling);

//previoussibling
console.log(itemlist.previousSibling);
//previouselementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color = 'red';

//createElement

//create a div
var newDiv = document.createElement('div');

newDiv.className='Hellw';

//add ID
newDiv.id = 'hell1';

//add attr
newDiv.setAttribute('title','hello div');

//create text node
var newDivText = document.createTextNode('hello new');

//add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);

