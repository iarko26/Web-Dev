function i(url,callback){
    var img=new Image();




    
    img.addEventListener('load',function(){
        callback(null,img)
    });
    img.addEventListener('error',function(){
        callback(new Error(`Failed to load image at ${url}`));
    });

    img.src=url;
}
i('https://images.freeimages.com/images/large-previews/d37/mem666-2007-011400241-jpg-1364340.jpg?fmt=webp&h=350',function(error,img){
if(error){
    console.error(error)
}
else{
    document.body.appendChild(img);
}
});




