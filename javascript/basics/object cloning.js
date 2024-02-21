//iteration
/*
let src={
    a:10,
    b:20,
    c:30
};
let dest={

}
for (let key in src){
    dest[key]=src[key];
    //console.log(key,dest[key]);
}
console.log(dest);
src.a++;
console.log(dest);


//assign
let src={
    a:10,
    b:20,
    c:30
};

let dest=Object.assign({},src);
console.log(dest);
src.a++;
console.log(dest);

let traget={
    c:10,
    d:20
};
let source={
    d:10,
    e:20
};
let goal=Object.assign(traget,source);
console.log(goal);
*/
//spread
let src={
    a:10,
    b:20,
    c:30
};

let dest={...src};
console.log(dest);
// src.a++;
// console.log(dest);