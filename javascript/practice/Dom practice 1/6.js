//Write a function to fetch data from an API using the Fetch API and handle the response with a callback.

//one way
// async function utility(){
// let con=await fetch('https://jsonplaceholder.typicode.com/todos/1');
// let response=await con.json();
// console.log(response);



// }
// utility();

//anothe way
 async function fetchdata(url,callback){
  try{
    let con= await fetch(url);
    let data= await con.json();
    callback(data);
  }
  catch(error){
console.error("found a error",error)
  }
}
function ot(con){
  console.log(con);

}
fetchdata('https://jsonplaceholder.typicode.com/todos/1',ot)




// function fetchData(url, callback) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => callback(null, data))
//       .catch(error => callback(error, null));
//   }
  
//   // Example usage
// fetchData('https://jsonplaceholder.typicode.com/todos/1', function(error, data)  {
//     if (error) {
//       console.error(error);
//     } else {
//       console.log(data);
//     }
// });