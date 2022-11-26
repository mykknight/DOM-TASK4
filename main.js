var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');


//form submit event

form.addEventListener('submit', addItem)

// delete event
itemlist.addEventListener('click',removeItem);

//filter event
filter.addEventListener('keyup',filteritems);

//add item

function addItem(e){
   e.preventDefault();

   //get input value
   var newItem = document.getElementById('item').value;
   var desItem = document.getElementById('description').value;


   //create  new Li element

   var li = document.createElement('li');
   //add class
   li.className = 'list-group-item';
   // add text node with input
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(desItem));
// create delete bt element

   var deletebtn = document.createElement('button');

   //Add class
   deletebtn.className = 'btn btn-danger btn-sm float-right delete';
   //append textnode
   deletebtn.appendChild(document.createTextNode('X'));

   //append button to li

   li.appendChild(deletebtn);


   itemlist.appendChild(li);
}

//remove item
function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('are you sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }

   }
}

//filter item fumction

function filteritems(e){
    // converts text to lower case
    var text = e.target.value.toLowerCase();
    var items = itemlist.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(xyz){
        var itemName = xyz.firstChild.textContent;
        var desName = xyz.childNodes[1].textContent;
        if(desName.toLowerCase().indexOf(text) != -1 || itemName.toLowerCase().indexOf(text) != -1){
            xyz.style.display = 'block';
        }
        else{
            xyz.style.display = 'none';
        }
    });

}