//access element
document.getElementById('wrapper');//it will return object but we use id
document.getElementsByClassName('container');//it will return objects in array
document.getElementsByTagName('h2');
//select element
$0
//queryselector
document.querySelector('.project-skill');//it will return the first object

document.querySelectorAll('.hidden');//it will return all hidden classes
//for existing web page 
/*update(.innnerHTML=get/set HTML

,.outerHTML,.textContent,.innerText)
*/
let c=document.querySelector('.text-textpara');
console.log(c.innerHTML);
c.innerHTML='';//update
//--------------------------------------------------

const container = document.getElementById("container");
const d = document.getElementById("d");

console.log(container.firstElementChild.nodeName); // logs "DIV"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";

console.log(container.firstElementChild.nodeName); // logs "P"

//if there is no parent node
const div = document.createElement("div");
div.outerHTML = '<div class="test">test</div>';
console.log(div.outerHTML);
//Also, while the element will be replaced in the document, the variable whose outerHTML property was set will still hold a reference to the original element:
const p = document.querySelector("p");
console.log(p.nodeName); // shows: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // still "P";
//add new element
let content=document.querySelector('.paraclass');
console.log(content);
let n=document.createElement("div");
console.log(n);
content.appendChild(n);
//insert element in specific position
let new1=document.createElement('p');
new1.textContent='abcd';
content.insertAdjacentElement('beforebegin',new1);
content.insertAdjacentElement('afterbegin',new1);
content.insertAdjacentElement('beforeend',new1);
content.insertAdjacentElement('afterend',new1);
//remove child
// !!!you have to know parent child and the child element to remove
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const throwawayNode = parent.removeChild(child);
//to find parent
child.parentElement
//easy way to remove child
child.parentElement.removeChild(child);

// /////////////////////////////////////////////////////////////////////////////////css
let con=$0;
con.style.color='red';
con.style.backgroundcolor='black';
con.style.cssText='color:red,background-color:blue;font-size:4em';
//set attribute methode
con.setAttribute('style','color:red;')
//toggle
const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener("click", () => {
  const result = classes.toggle("c");
  span.textContent = `'c' ${
    result ? "added" : "removed"
  }; classList is now "${classes}".`;
});