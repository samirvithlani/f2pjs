function demo(){
    console.log("Hello World");
}

function sum(a,b){

    // let c = a + b;
    // return c;
    return a + b;
}

function mul(){

    return 10 * 20;
}
demo();
var ans = sum(10,20);
console.log(ans);


var ans1 = mul();
console.log(ans1);




const add = () =>{

    console.log("Arrow function");
}

const add1 = () => console.log("Arrow function");
add();
add1();

var prints =(a,b) =>{
    return a + b;
}

var printans = prints(10,20);
console.log(printans);

const prints1 =(a,b)=> a + b;
console.log(prints1(10,20));



