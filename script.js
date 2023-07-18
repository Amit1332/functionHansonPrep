function Zerofunc(){
    console.log("Hello");
}

Zerofunc()



function sum(a,b){
    let c= a+b
    console.log(`sum of ${a}, ${b} is ${c}`);
}
sum(3,4)


const arrowFunct = ()=>{
    console.log("Hello");
}

arrowFunct()

let fac=1
function factorial(n){
    
for(let i=n; i>0; i--){
    fac*=i
}
console.log(fac);
}


factorial(6)


const greet =  function(name){
    return function(m){
    
        console.log(`Hi!! ${name}, ${m}`);
    }
}
  
const greet_message = greet('EA19');
greet_message("Welcome To PrepBytes")
