// ADD NEW ITEM TO END OF LIST
var list = document.querySelector('ul');

var lastEntry = document.createElement('li');
lastEntry.appendChild(document.createTextNode('cream'));

list.appendChild(lastEntry);

// ADD NEW ITEM START OF LIST
var firstEntry = document.createElement('li');
firstEntry.appendChild(document.createTextNode('kale'));

document.querySelector('ul').insertBefore(firstEntry, list.firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var allListItems = document.getElementsByTagName('li');

for(let i = 0; i< allListItems.length; i++){
    allListItems[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.querySelector('h2').innerHTML += "<span>" + allListItems.length + "</span>";
