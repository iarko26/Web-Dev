function rep(str){
    // return str.split('cat').join('dog');
    return str.replace(/cat/g, 'dog');

}
console.log(rep('cat is a pet animal'));
console.log(rep('cat is a pet animal and cat is a domestic animal'));
console.log(rep('I have a cat. My cat is fluffy.'));