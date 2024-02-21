// fetch api return promise
//GET
async function utility(){
    let con= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let output=await con.json();
    console.log(output);



}

utility();

//post

// async function p(){
//     let option={
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Arnob',
//           body: 'Human',
//           userId: 2002,
//           weight: 61
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//     let post_Req= await fetch('https://jsonplaceholder.typicode.com/posts',option);
//     let response=post_Req.json();
//     return response;

// }

// async function helper(){
// let ans= await p();
// console.log(ans);
// }
// helper();

//PUT
// async function p(){
//     let option={
//         method: 'PUT',
//         body: JSON.stringify({
//           id: 1,
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       };
    
//     let put_Req= await fetch('https://jsonplaceholder.typicode.com/posts/1',option);
//     let response=put_Req.json();
//     return response;

// }

// async function helper(){
// let ans= await p();
// console.log(ans);
// }
// helper();


//DELETE

async function p(){
    let option={
        method: 'DELETE',
        body: JSON.stringify({
          id: 1,
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      };
    
    let del_Req= await fetch('https://jsonplaceholder.typicode.com/posts/1',option);
    let response=del_Req.json();
    return response;

}

async function helper(){
let ans= await p();
console.log(ans);
}
helper();




