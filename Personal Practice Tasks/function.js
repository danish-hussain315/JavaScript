// ++++++++++++++++++++++++++++++++++ 76 I will Perform the function task with +++++++++++++++++++ 

/*
// Write a function to add two numbers.                                 
function add (val1 , val2 ){
  return val1 + val2
}
console.log(add(5,4))

let sumOfTwoNumbersArrowFuntion =  (val1 , val2) =>  (val1 + val2)
let sumOfTwoNumbersArrowFuntionWithReturn =  (val1 , val2) => { return(val1 + val2)}

console.log(sumOfTwoNumbersArrowFuntion(3,10));
*/









/// ++++++++++++++++ Write a function with default parameter. ++++++++++++
/*function functionWithDefaultParamters(name = "Danish"){
  return name
}

console.log(functionWithDefaultParamters("Hussain"));


const arrowFunctionWithDefaultParamters = (name ="Dnish") =>  name;
console.log(arrowFunctionWithDefaultParamters(1));

*/

















/*
//++++++++++++++++ Write a function expression. +++++++++++++++++++++++++++
let functionExpressiong = function printExpression(){
  console.log(`this is printed from the Functional Expression`);
  return ""
}
console.log(functionExpressiong());


*/













/*
//++++++++++++++++++++++++  Write an arrow function. +++++
const printThroughTheArrowFunction = () => {return "Printed From Arrow Function"}
const printThroughTheArrowFunctionWithourReturn = () =>  "Printed From Arrow Function Without Return"
console.log(printThroughTheArrowFunction());
console.log(printThroughTheArrowFunctionWithourReturn());
*/





/*
// ++++++++++++++++++ Return multiple values from function (object/array). +++++++++++++++
// let returmArrayFromFuntion = function retunsFrom(){
//   return ["danish", "Hussain", "Mangi"]
// }

let returmArrayFromFuntion = function retunsFrom(){
  return  {"array" : ["danish", "Hussain", "Mangi"]}
}
console.log(returmArrayFromFuntion().array[0]);

*/






/* 
// ++++++++++++++++++  Write a function to check even/odd. ++++++++
function checkEvenOrOdd(number){
  if(number % 2 ==0){
    return "Number is Even"
  }else {
    return "Number is Odd"
  }
}

console.log(checkEvenOrOdd(1)); */





/* 
// ++++++++++++++++++++ Function to find factorial of a number. +++++++

function factorial(num){
  let fact = 1;
  for (let i = 1;  i<= num; i++) {
    fact =fact*i
  }
  return fact;
}

function findFactorial(number){
  if (number <0) {
    return "Cannot find Factorial of the Negative Number "
  } else if(number == 0) {
    return `Factorial of 0 is 1`
  }else{
    return factorial(number)
  }
}
console.log(findFactorial(4)); */






/* 
//++++++++++++++++ Function to reverse a string. ++++++++
function reverseStrings(name = "Danish"){
  return name.split("").reverse().join()
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hussain")); // niassuh
console.log(reverseStrings()); */




/* 
//++++++++++++++++ Function to count vowels in string.++++++++++

const countVovels = (word = "Danish") =>{
  let count = 0
  word = word.toLowerCase()
  let spliedWord = word.split("")
  for (let i = 0; i < spliedWord.length; i++) {
    if (spliedWord[i] == 'a' || spliedWord[i] == 'e' || spliedWord[i] == 'i' || spliedWord[i] == 'o' || spliedWord[i] == 'u') {
      count++
    }
    
  }
  return count
}


console.log(countVovels("Meanei")); */







/* 
// +++++++++++++++++ Assending Sorting ++++
let array = [1,4,2,6,4,3,9]

array.sort((a, b) => a - b)
console.log(array);




// +++++++++++++++ Function to convert array → object with indexes as keys. ++++++++++++
function arraytoObjectIndexAsKey(arr){
  return Object.assign({} , arr)
}

console.log(arraytoObjectIndexAsKey(['a' , 'v,', 'c', 'd'])); */
