function ra(length){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const randomarr=Array.from({length},function(){
               return Math.floor(Math.random()*100);
            });
            resolve(randomarr);
        },3000)
    
    })
}
ra(5).then((val)=>{
console.log(val)
}).catch((error)=>{
    console.error(error);
})