function customerr(num){
    return new  Promise((resolve,reject)=>{
        if(typeof num!="number"){
            reject(new Error("enter number"))
        }
        else{
            resolve(num)
        }
    });
}
customerr("number").then((val)=>{
    console.log(val)
}).catch((e)=>{
    console.error(`Error: ${e}`);
})

// customerr(5).then((val)=>{
//     console.log(val)
// }).catch((e)=>{
//     console.error(`Error: ${e}`);
// })