function rp(){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve();
    },2000)
});
}

console.log("start");
rp().then(()=>{
console.log("function excuted")
});
console.log("end");