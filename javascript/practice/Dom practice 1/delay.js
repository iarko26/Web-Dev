async function dl(){
    let con=new Promise(function(resolve,reject){
setTimeout(()=>{
    resolve("before delay")
},1000);

});


let con1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("after delay")
    },5000);
});

let con2=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("function delayed"),7000})    
    });


    let c = await con;
    console.log(c);

    let c1 = await con1;
    console.log(c1);

    let c2 = await con2;
    console.log(c2);






}

dl();