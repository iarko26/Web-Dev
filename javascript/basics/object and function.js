/*
 let rect = {

    length: 1,
    width: 2,
  draw:function(){
    console.log("drawing a rectangle");
  }
  
  draw(){
    console.log("drawing a rectangle");
  }
  
};

console.log(rect);
console.log(rect.draw());

//Object.create() use to create a object it is also another way to create object
let car={
  color:"black",
  brand:"Toyota",
  drive:function(){
    console.log(`Driving a ${this.isTopModel ? 'top model' : ''} ${this.color} color ${this.brand} car`);

  }
}
let createcar=Object.create(car);
createcar.color="white";
createcar.isTopModel="true";
console.log(createcar.color);
console.log(createcar.brand);
console.log(createcar.drive());

*/


///-----------------------------------------------------------------------------------------------------------------------











/*factory function(creat eobject and return that object) with two properties and one methode*/
/*
function createrect(){
  return rect = {

    length: 1,
    width: 2,
  draw:function(){
    console.log("drawing a rectangle");
  }
};

}
*/

// // /*create object*/
// let createrectobj=createrect();
// /*print object*/
// console.log(createrectobj);

/*print object's particular property*/
// console.log(createrectobj.length);
// console.log(createrectobj.width);
// console.log(createrectobj.draw());


// //input parameter
// function car(col,mod){
//   return carD={
// color:col,
// model:mod,
// drive:function(){
//   console.log("this is a white color and the model of the car is toyota axio");
// }
//   };
// }
// let createCarobj=new car("black","toyota");
// let createCarobj1= new car("white","Marcedes")
// console.log(createCarobj,createCarobj1);



///---------------------------------------------------------------------------------------------------------------------------------------





//constructor function (pascal notation)
function Car()
{
  this.color="black",
  this.brand="Toyota",
  this.drive=function(){
    console.log("Drive");
  }
}
let c=new Car();
//add property
c.numberplate="y-267"
console.log(c);
//delete property
delete c.numberplate;
console.log(c);

///---------------------------------------------------------------------------------------------------
