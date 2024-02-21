const string1="let's start js";//string
console.log(typeof string1);
console.log(string1.includes('js'));
console.log(string1.indexOf('e'));
console.log(string1.replace('let','yes'));

const string2= new String("okay js");//object
console.log(typeof string2);
console.log(string2.startsWith('js'));

//access character
console.log("javascript".charAt(4));
console.log("java"[2]);
//comparing
function uppperCase(str1,str2){
    return str1.toUpperCase()=== str2.toUpperCase();
}
console.log(uppperCase("AA","SS"));
//eval(it will give different result)
const s1="3+3";
const s2=new String("3+3");
console.log(eval(s1));
console.log(eval(s2));

//string constructor and string function
const a=new String("hello");
const b=String("world");
console.log(a instanceof String);
console.log(b instanceof String);
console.log(typeof a);
console.log(typeof b);

//split
let message='This is my world';
let word=message.split(' ');
console.log(word);

//date and time
let d=new Date();
let d1=new Date('December 28 2023 9:21');
let d2=new Date(2023,11,28,9);
console.log(d1);