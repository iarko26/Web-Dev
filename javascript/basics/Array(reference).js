//array of object
let course=[{no:1,Name:'C#'},{no:2,Name:'Web tech'}];
//console.log(course);
//console.log(course.indexOf({no:1,Name:'C#'}))//it is different object

//callback funtion(searching)


// let courses=course.find(function(courses){
//     return courses.Name==='C#'
// }
// )
// console.log(courses);

//arrow funtion for opitimizing(callback function)
let courses=course.find(courses=>
     courses.Name==='C#'

)
console.log(courses);
//removing element
