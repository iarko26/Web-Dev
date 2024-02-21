//Write a function to read a file using the Node.js File System module and handle the contents with a callback.
//for reading readfile,for write writefile,for delete unlink

const fs=require('fs');

function rdfl(filepath,callback){
    fs.readFile(filepath,'utf-8',function(error,data){
        if(error){
            callback(error)
        }
        else{
            callback(null,data)
            
        }
        
        
    });
}


rdfl('3.js',function(error,data){
    if(error){
        console.log("it cant read the file",error);
    }
    else{
        console.log(data)
    }
});



