async function fdrp(url){

    try{
        let con=await fetch(url);
        let ot=await con.json();
        return ot;
    }catch(e){
        //return Promise.reject("something is fishy!",e)

        console.log("oops");
        throw e
    }



}

fdrp('https://jsonplaceholder.typicode.com/posts/1')
.then(function(ot){
console.log(ot)
}).catch((e)=>{
    console.error("Error:", e);
})