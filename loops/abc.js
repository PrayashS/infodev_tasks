let p= new Promise((r,e)=>r("promise success"))
console.log("A")
function test(){
console.log("B");
setTimeout(()=>{console.log("C")},0)



p.then(r=>console.log(r))



setTimeout(()=>{console.log("D")},100)



console.log("E");
}
test()