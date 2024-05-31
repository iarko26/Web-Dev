const allboxes=document.querySelectorAll('.box');
const winnermssg=document.querySelector('.winner-info');
const resetbtn=document.querySelector('.reset');
let currentplayer;
let board;

const winnigposition=[
    [0,1,2], //row       index 0
    [3,4,5], //row       index 1
    [6,7,8], //row       index 2
    [0,4,8], //diagonal  index 3
    [2,4,6], //diagonal  index 4
    [0,3,6], //column    index 5
    [1,4,7], //column    index 6
    [2,5,8], //column    index 7
];




//initialize the game
function startgame(){
    currentplayer='X';
    board=['','','','','','','','','',''];
    
    allboxes.forEach((box)=>{
        box.textContent='';
        box.style.pointerEvents='all';
        box.classList.remove('win');
        box.classList.remove('tie');

    })
winnermssg.textContent=`Current player: ${currentplayer}`;
}
startgame();
function swapfunc(){
    if(currentplayer==='X'){
        currentplayer='O';

    }
    else{
        currentplayer='X';
    }
    winnermssg.textContent=`Current player: ${currentplayer}`;

}
function checkwinner(){
    let result='';
  
    winnigposition.forEach((pos)=>{
        if((board[pos[0]]!=='' || board[pos[1]]!=='' || board[pos[2]]!=='') && (board[pos[0]]===board[pos[1]]) && (board[pos[1]]===board[pos[2]])){
            if(board[pos[0]]==='X'){
                result='X';
            }
            else{
                    result='O';

            }
            allboxes.forEach((box)=>{
                box.style.pointerEvents='none';
            
            });
            allboxes[pos[0]].classList.add('win');
            allboxes[pos[1]].classList.add('win');
            allboxes[pos[2]].classList.add('win');

        }

    });
    if(result!==''){
        winnermssg.textContent=`The winner is ${result}`;
        return;
    }
    //check if the board is full
    let isfull=true;
    allboxes.forEach((box)=>{
        if(box.textContent===''){
            isfull=false;


        }
        
        
    });
    //check if the board is full
    if(isfull){
        winnermssg.textContent=`The game is a tie`;
        allboxes.forEach((box)=>{
            box.style.pointerEvents='none';
            box.classList.add('tie');

        });
        return;

    }

}

function handleclick(index){
    //check if the box is empty
    //if it is empty 
       //unclickable
       //we have to make a function swapfunc() which will swap the player
      
       //check if anyone has won

       if(board[index] ===""){
        allboxes[index].textContent=currentplayer;
        board[index]=currentplayer;
        allboxes[index].style.pointerEvents='none';
         swapfunc();
        checkwinner();
}
    

}
//click in the box 
allboxes.forEach(function(box,index){
    box.addEventListener('click',function(){
      handleclick(index);
  
  
    });
  });


resetbtn.addEventListener('click',startgame)


