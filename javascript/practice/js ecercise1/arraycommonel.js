// function comarr(arr1,arr2){
//    return v= arr1.filter(function(val){
// return arr2.includes(val);
//     });

// };
// let arr1=[3,4,5,6,7];
// let arr2=[3,4,5,8,9];
// v=comarr(arr1,arr2);
// console.log(v);

function commonarr(arr1,arr2){
    let commonelement=[];
    for(let i=0;i<=arr1.length;i++){
        if(arr2.includes(arr1[i])){
            if(commonelement.includes!=arr1[i]){
                commonelement.push(arr1[i]);
            }
        }
    }
    commonelement.sort(function(a,b){
        return a-b;
    }
    )
    return commonelement;
}
let arr1=[1,4,5,6,7];
let arr2=[3,4,5,8,9];
commonelement=commonarr(arr1,arr2);
console.log(commonelement);