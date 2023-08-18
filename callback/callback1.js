function need(name,x){
    console.log("i need a function",name,x);
    return "bahot kam paisa"
}
function require(name){
    console.log("i require a function",name);
    return "bahot zyda paisa"
}

function test(a){

   // console.log(a);
    var x = a("paise")
    console.log(x);

}

// test(10)
// test("ram")
// test(true)
test(need)
test(require)
