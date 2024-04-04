//callback hell
function getdata(dataId,getnextdata){
setTimeout(()=>{
  console.log('data',+dataId);
  if(getnextdata){
    getnextdata();
  }
},2000);
  
}
getdata(1,()=>{
  getdata(2,()=>{
    getdata(3);
  });
})