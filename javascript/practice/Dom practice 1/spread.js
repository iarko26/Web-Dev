let numbers1=[10,99,22,3];
let numbers2=[50,6,79,8];

function copynumbers(...args){
   return Math.max(...args);
}
console.log(copynumbers(...numbers1));
console.log(copynumbers(...numbers2));
