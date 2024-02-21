function tc(num){

        if(typeof num!="number"){
            throw  new Error("Input must be a number");
        }


}
try{
    let x=tc("hello");
    console.log(x);


}catch(error){
    console.error("this is error: "+error);
}
