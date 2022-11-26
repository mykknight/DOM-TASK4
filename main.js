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

   //create  new Li element

   var li = document.createElement('li');
   //add class
   li.className = 'list-group-item';
   // add text node with input
   li.appendChild(document.createTextNode(newItem));
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
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }
    });

}