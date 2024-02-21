///////////////////////////////////////////////////////////////////////////////////////////async

// setTimeout(function(){
//     console.log("third")
// },3000)  //async code excute after callstack function

// function sync(){
//     console.log("first")
// }
// sync()
// console.log("second")

/////////////////////////////////////////////////////////////promises (for parallel excution in background) call back function

// let mypromise=new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("i am inside in the promise")
// },5000);
// reject(new Error("this is error"));
// // resolve("hehehe")
// });
// console.log("First")

// let Mypromise=new Promise(function(myR,myRE){

// let newp=document.createElement('p');
// newp.textContent='Hey this is my promise';

// setTimeout(function(){
//     myR(newp)
//  },5000)



// });
// Mypromise.then(function(value){
//     document.body.appendChild(value)
// })

// let Mypromise=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hey whatsapp")
//     },3000)
//     reject(new Error("hey he error"));

// });
// Mypromise.then(function(value){
//     console.log(value)
// }).catch(function(error){
//     console.log("receive an error")
// });

///////////////////////////////////////////////////////////// multiple promises

// let promise1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
// console.log("my first promise");
//     },2000)
//     resolve(true);
    

// });
// let ot=promise1.then(()=>{
//     let promise2=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("i am in promise two");
//         },3000);
//         resolve("it resolved");
//     });
//     return promise2
// });
// ot.then((val)=>{
//     console.log(val);
// });

// async function abcd(){
//     return 7
// }

// async function utility(){
//     let dhk=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('dhaka weather is very harsh');
//     },2000)
//     });
    
//     let nsd=new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Narsingdi weather is very mild');
//         },5000)
//         });
    
//     let d=dhk
//     let n=nsd
//     return [d,n];
// }


/////////////////////////////////////////////////////////////Aync await (special syntax work with  promsies )

async function utility(){
    let dhk=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('dhaka weather is very harsh');
    },2000)
    });
    
    let nsd=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Narsingdi weather is very mild');
        },5000)
        });
    
    let d= await dhk
    let n= await nsd
    return [d,n];
}

utility().then((val)=>{
console.log(val);
});



