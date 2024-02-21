//for iterting we user forof rule
//traversing
let ar=[10,20,30,40,50];
for(let key of ar){
    console.log(key);
}

//traversing another way
let a=[1,2,3,4,5,6,7];
a.forEach(function(numbers)
{
    console.log(numbers);
}
)
//joining array
let arr=[101,201,303,405,505];
const joined= arr.join(',');
console.log(joined);
//split
let message='this is my messsage to you';
let spliting=message.split(' ');
console.log(spliting);
//sort and reverse
let unsorted=[67,34,2,98,0,23];
console.log(unsorted.sort());
console.log(unsorted.reverse());

//object
let arr2=[{n:1},{n:2},{n:4},{n:33},{n:3}];
let usort=arr2.sort(function(a,b){
    return a.n-b.n;
});
console.log(usort);