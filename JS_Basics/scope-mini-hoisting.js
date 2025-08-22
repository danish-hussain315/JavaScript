let username = "Danish"


function outer(){
  const username = "Hussain"
  function inner(){
    const channet = "youtube"
    console.log(channet)
  }
  // console.log(channet);
  inner()
  
}

outer()



// Hoisting demo with function delceration Normal Funtion with Expression

console.log(addOne(5));

function addOne(num){      // Normal Function can be easily call
  return num +1
}                            //output = 6

console.log(addTwo(6));
let addTwo = function(num){     // expersion funtion can not call before decleration
  return num +2
}                               // this will give error before decleration function called
var a= 10
console.log(a);    

