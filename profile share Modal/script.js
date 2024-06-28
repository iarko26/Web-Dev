/*if you using this code then remeber to add the onclick function in html file for the buttons*/

// const Modal2=document.querySelector('.Modal2');
// const overlay=document.querySelector('.overlay');
// const Modal1=document.querySelector('.Modal1');
// const overlay1=document.querySelector('.overlay1');
//     var f = document.getElementById('fb');
//     var l = document.getElementById('ld');
//     var g = document.getElementById('gt');
//     var t = document.getElementById('tw');
    

// var openMod1=()=>{
//     console.log('open');
//     Modal1.classList.add('active1');
//     overlay1.classList.add('overlayactive1');
// };
// var closeMod1=()=>{
//     console.log('close');
//     Modal1.classList.remove('active1');
//     overlay1.classList.remove('overlayactive1');
// };
// var openMod=()=>{
//     console.log('open');
//     Modal2.classList.add('active');
//     overlay.classList.add('overlayactive');
// };
// var closeMod=()=>{
//     console.log('close');
//     Modal2.classList.remove('active');
//     overlay.classList.remove('overlayactive');
// };

//     f.addEventListener('click', function() {
//         window.location.href = 'https://www.facebook.com/arnob.ghosh.980967/';
//     });

//     l.addEventListener('click', function() {
//         window.location.href = 'https://www.linkedin.com/in/arnob-ghosh-578141290/';
//     });

//     g.addEventListener('click', function() {
//         window.location.href = 'https://github.com/iarko26';
//     });

//     t.addEventListener('click', function() {
//         window.location.href = 'https://twitter.com/DhritvanGh69865';
//     });



/*for this you dont need to add onclick function in html file for the buttons*/

document.addEventListener('DOMContentLoaded', function() {
    var Modal1 = document.querySelector('.Modal1'); // Select Modal1
    var Modal2 = document.querySelector('.Modal2'); // Select Modal2
    var overlay = document.querySelector('.overlay'); // Select overlay
    var overlay1 = document.querySelector('.overlay1'); // Select overlay1



    function openMod1(){
        console.log('open share button');
        Modal1.classList.add('active1');
        overlay1.classList.add('overlayactive1');
    }
    function closeMod1(){
        console.log('close share button');
        Modal1.classList.remove('active1');
        overlay1.classList.remove('overlayactive1');
    }
    function openMod(){
        console.log('open follow button');
        Modal2.classList.add('active');
        overlay.classList.add('overlayactive');
    }

    function closeMod(){
        console.log('close follow button');
        Modal2.classList.remove('active');
        overlay.classList.remove('overlayactive');
    }



    var btnShare=document.querySelector(".btn-share");
    btnShare.addEventListener('click', openMod1);
    var btnFollow = document.querySelector(".btn-follow");
    btnFollow.addEventListener('click', openMod);
    var btnClose1=document.querySelector(".close1");
    btnClose1.addEventListener('click', closeMod1);
    var btnClose2=document.querySelector(".close");
    btnClose2.addEventListener('click', closeMod);

});
