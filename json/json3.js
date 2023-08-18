var persons =[
    {
        id:1,
        name:"ram",
        gender:"male",
        age:21,
        height:5.5,
    },
    {
        id:2,
        name:"parth",
        gender:"male",
        age:22,
        height:5.6,
    },
    {
        id:3,
        name:"sita",
        gender:"female",
        age:20,
        height:5.2,
    },{
        id:4,
        name:"gita",
        gender:"female",
        age:21,
        height:5.3,        
    }
]

var filarray = persons.filter((per)=>{
    // return per.gender==="female"
    //return per.age>21 && per.gender ==="male"
})
console.log(filarray)

// for(let i=0;i<persons.length;i++){

//     if(persons[i].gender==="male"){
//         filarray.push(persons[i])
//     }
// }
//console.log(filarray)