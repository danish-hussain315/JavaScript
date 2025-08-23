let email = "Danihs"

if (email) {
  console.log("have a user email ");
  
} else {
  console.log("dont have email");  
}



// 


//Check condition over array as truthy and Falsy

let array = []
if (array.length == 0) {
  console.log("Empty Arrray");
  
}


let obj = {}
if (Object.keys(obj).length == 0) {
  console.log("Empty Object");
  
}



//Nullish coalescing opererotr (??) null undefined

let val = 2 ?? 4
let val1 = null ?? 4
let val2 = undefined ?? null
console.log(val);
console.log(val1);
console.log(val2);




// Ternary operator 
(1>3)? console.log("Yes it is greater")  : console.log("It's not greater");
