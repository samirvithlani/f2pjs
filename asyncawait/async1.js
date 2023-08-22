var user;

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve({id:1,name:"test"});
      reject({error:"error while fetching data"})
    }, 2000);
  });
};

// function printData(){


//         // var x = getData()
//         // x.then((data)=>{
//         //     console.log(data)
//         // })
//         // x.catch((err)=>{
//         //     console.log(err)
//         // })

//         getData().then((data)=>{
//             console.log(data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//         console.log("after promise")

// }

async function printData(){


    var x = await getData()
    console.log(x)
    console.log("after promise")
    user = x;
    console.log(user)

 
}
printData()


