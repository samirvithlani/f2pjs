var products=[
    {
        id:1,
        name:"marker",
        price:10,
        quantity:100,
        description:"white board marker",
    },{
        id:2,
        name:"scale",
        price:5,
        quantity:100,
        description:"15 cm scale",
    },{
        id:3,
        name:"board",
        price:1000,
        quantity:100,
        description:"white board",
    }
]

// for(let i=0;i<products.length;i++){
//     console.log(products[i].id)
//     console.log(products[i].name)
//     console.log(products[i].price)
//     console.log(products[i].quantity)
//     console.log(products[i].description)
//     console.log("*****************")
// }

// products.forEach((products[i])=>{
// products.forEach((prod)=>{

//     console.log(prod.id)
//     console.log(prod.name)
//     console.log(prod.price)
//     console.log(prod.quantity)
//     console.log(prod.description)
//     console.log("*****************")

// })

// var x = products.map((prod)=>{

//    return prod.price=prod.price+100

// })
var x = products.map((prod)=>{

    return{
        id:prod.id,
        name:prod.name.toUpperCase(),
        price:prod.price+100,
        quantity:prod.quantity,
        description:prod.description.toLocaleLowerCase()
    }
 
 })
 
console.log(x)