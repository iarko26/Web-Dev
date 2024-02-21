//Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

function countLetters(s){
    var count={};
for (var i=0;i<s.length;i++){
let char=s[i];
if(count[char]){
    count[char]++;
}
if(!count[char]){
    count[char]=1;
}

}
return count;
}
let result=countLetters("hello");
console.log(result);
