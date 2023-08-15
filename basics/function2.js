function outer (){
    
    console.log("I am outer function");

    function inner(){
        console.log("I am inner function");
    }
    inner();
}

outer();
//inner(); // error



function outer1 (a){
    

    console.log("I am outer function",a);

    function inner(x){
        console.log("I am inner function",x);
    }

    inner(a*10);
}

outer1(100);
//inner(); // error


function outer2 (a,b){
    
    console.log("I am outer function");

    function inner2(x,y,z){
        console.log("I am inner function");

        return x + y + z / 3;
    }
    var z1 = inner2(10,20,30);
    console.log("average..",z1);
    return a *b;
}

var outasns = outer2(100,200);
console.log("outer ans",outasns);
//inner(); // error



function outer3 (a,b,c){
    
    console.log("I am outer function !!!");

    function inner3(x,y,z){
        console.log("I am inner function..");

        return x + y + z / 3;
    }
    
    
    return inner3(a,b,c);
}

var outasns1 = outer3(10,2,3);
console.log("outer ans",outasns1);
