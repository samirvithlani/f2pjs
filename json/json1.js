var sname = "raj"
var age = 21
var city = "chennai"
var married = false
var salary = 10000

var student ={
    name : "ram",
    age : 21,
    // city : "chennai",
    // pincode : 600001,
    // state : "tamilnadu",
    married : false,
    salary : 10000,
    skills:["c","c++","java","python"],


    address : {
        city : "chennai",
        pincode : 600001,
        state : "tamilnadu"

    },
    qualification:{
        ug:{
            degree : "B.E",
            college : "srm",
            university : "anna university"
        },
        pg:{
            degree : "M.E",
            college : "srm",
            university : "anna university"
        },
        phd:{
            degree : "phd",
            college : "srm",
            university : "anna university"
        }
    }
    

}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.city)
console.log(student.married)
console.log(student.salary)
console.log(student.address.city)
console.log(student.address.pincode)
console.log(student.address.state)
console.log(student.qualification.ug.degree)
console.log(student.qualification.ug.college)
console.log(student.qualification.ug.university)
console.log(student.qualification.pg.degree)
console.log(student.qualification.pg.college)
console.log(student.qualification.pg.university)


// console.log(student.skills[0])
// console.log(student.skills[1])
// console.log(student.skills[2])
// console.log(student.skills[3])

for(let i=0;i<student.skills.length;i++){
    console.log(student.skills[i])
}


