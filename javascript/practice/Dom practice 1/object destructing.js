// let courses={
//     course1:"HTML",
//     course2:"CSS",
//     course3:"JS"


// };
// let getCourses=(courses)=>{
//     let valcourses=Object.values(courses);
//     return valcourses;


// }
// console.log(getCourses(courses));

// another way

let  courses=(Courses)=>{
    const {course1,course2,course3}=Courses;
    return [course1,course2,course3];
}
console.log(courses({course1:"HTML",course2:"CSS",course3:"JS"}));
console.log(courses({course1:"C",course2:"C++",course3:"JAVA"}));
console.log(courses({course1:"Python",course2:"Ruby",course3:"Rust"}));
