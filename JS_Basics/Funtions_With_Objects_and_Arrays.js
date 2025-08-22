function calculateThePrice(num1) {
  return num1
}

console.log(calculateThePrice(400));


function restOperator(val1 , val2 , ...val3){
  return val3 ,val1 , val2
}

console.log(restOperator(200, 300 , 400, 600, 700,800));



// Pasing object to Function
function passObject(myObject){
  console.log(`MyName is ${myObject.myName} and my Degree is ${myObject["myDegree"]} completed in ${myObject[mySymbol]}`);
  
  return myObject
}

let mySymbol =  Symbol("degreeYear")
console.log(passObject({
  myName : "Danish",
  myDegree : "CS",
  [mySymbol] : 2024
}));



