//promise --->

//promise stages
//1. pending
//2. resolve - fulfilled
//3. reject - rejected
//asyncronous

///////// 
// ---------

function test(){


        var promise = new Promise((res,rej)=>{
            //res(data)
            //rej(err)
            
            setTimeout(()=>{
               // res("succes....")
               rej("error....")
            },3000)

        })
        console.log("promise...",promise)

        promise.then((data)=>{
            console.log(data)
        })
        promise.catch((err)=>{
            console.log(err)
        })

}
//test()

const demo = ()=>{


    return new Promise((success,failure)=>{
        setTimeout(()=>{
            success("success")
        },3000)
    })
}

// var x = demo()
// console.log(x)
// x.then((data)=>{
//     console.log(data)
// })
// x.catch((err)=>{
//     console.log(err)
// })

//datatype???
var uname;

const demo1 = ()=>{


    //callback hell
    var promise = new Promise((suc,fail)=>{

        setTimeout(()=>{
            suc("success")
        },3000)

    })
    console.log(promise)
    promise.then((data)=>{
        console.log(data)
        uname = data
    })
    promise.catch((err)=>{
        console.log(err)
    })

}
demo1()
console.log(uname)


