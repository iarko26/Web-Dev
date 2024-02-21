function cm(condition,messsage){
    if(!condition){
        console.error(messsage);
    }
}
let x=5
let y=10
cm(x>y,`x is not greater than y`)