const student ={
    rollno : "1",
    name : "Hardik Garg",
    mobile: "12345",
    mentor : "Jai",
    student1 : function(){
            return this.mentor
    
    }
};
// console.log(student.student1())

// let fullname = student.name
// console.log(fullname)
// student.mentor = function(){
//     return this.mentor;
// }

const stu = student.student1;
// console.log(stu())
const stu1 = stu.bind(student)
console.log(stu1());
// const students ={
//     section : "A"
// }
// // student.student1.apply(null,students)    
// student.student1.call(students)
// console.log(student.student1)