// Promise.all for parallel api and use map
async function fetchParaapi(urls){

    try{
        let promises= await urls.map(async(url)=>{
        let response = await fetch(url);
        let con=await response.json();
        return con;
        });
        // let res=await Promise.all(urls.map(url=>fetch(url)))
    
    let data=await Promise.all(promises);
    return data;
    // let data=await Promise.all(res.map(res=>res.json()));
    // return data
    }
   



catch (error) {
    return Promise.reject("something is fishy!",error)
}
}
var urls=["https://jsonplaceholder.typicode.com/posts/1",
"https://jsonplaceholder.typicode.com/comments/1",
"https://jsonplaceholder.typicode.com/albums/1"];

fetchParaapi(urls).then((data)=>console.log(data)).catch((e)=>console.error(e))
// fetchParaapi(urls).then((res)=>console.log(res)).catch((e)=>console.error(e))

