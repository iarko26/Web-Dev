function email(str){
    // const regx=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const regx=/\S+@\S+\.\S+/;
    if(regx.test(str)){
        return true;
    }
    else{
        return false;
    }

}
console.log(email('arnob@duck.com'));
console.log(email('example@example.com'));
console.log(email("example@.com."));
console.log(email("example@examplecom."));
console.log(email("example@.com"));
console.log(email("example@example.co.org"));
