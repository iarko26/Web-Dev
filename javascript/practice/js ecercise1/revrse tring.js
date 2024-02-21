
function rev(str){
    let word=str.split(' ');
    
for(let i=0;i<word.length;i++){
  var temp=word[i];
  var revS='';
  for(let j=temp.length-1;j>=0;j--){
    revS+=temp[j];
  }
  word[i]=revS;
}
return word.join('');

}
console.log(rev("ARNOB"));

/*
function rev(str){
    const word=str.split("").reverse().join("");
    return word;
}
console.log(rev("ARNOB"));
*/