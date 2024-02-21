//Write a function to add a CSS class to an element on the mouseover event.


function cls(elementID, className) {
    var ele = document.getElementById(elementID);
    ele.addEventListener('mouseover', () => {
        ele.classList.add(className);
        setTimeout(() => {
            ele.classList.remove(className);
        }, 500);
    });
}


cls('myButton', 'active');






