function rp(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            reject(new Error());
    },2000)
});
}
rp().then(function(val){

    console.log('Resolved: '+ val);
}).catch(function(error){
    console.error("oops something is not running");
})



// function rejectWithDelay(errorMessage, delay) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject(new Error(errorMessage));
//       }, delay);
//     });
//   }
  
//   // Example usage:
//   rejectWithDelay("Oops! Something went wrong.", 2000).catch((error) => {
//     console.error(error.message); // Output: Oops! Something went wrong.
//   });