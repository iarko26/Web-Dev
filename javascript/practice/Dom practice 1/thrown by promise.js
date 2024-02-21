function handlemssg(promise, msg) {
    promise.catch(function(err){
        console.error(msg, err);
    });
}

let newpromise = new Promise(function(resolve, reject){
    // let x = 10;
    // let y = 5;
    // if (x > y) {

    //     console.log(resolve(x + y));
    // } else {
        reject(new Error('Something went wrong'));
    
});

handlemssg(newpromise, "Error caught:");
