//Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter(){
    let count = 0;
return function createCounter(){
    count++;
    return count;
}

}
let counter=createCounter();
console.log(counter()); 
console.log(counter());
console.log(counter());
