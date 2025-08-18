//task 1
const caste = "Mangi"
let name= "Danish"
var age = 25

//task 2
console.log(`My name is ${name}`)


//task3
console.log(typeof(age));

//task 4
let isStudent = true

//task 5
let toUndefined
console.log(toUndefined);


//task 6
toUndefined = null
console.log(toUndefined);


//task 7
let bigInt = 12345678901234567890n

// task 8
console.log(10 == "10")
console.log(10 === "10");


//task9 Symbol
let createSymbol = Symbol("ID")
console.log(createSymbol);


//task 10  Convert a number to string (String(10)).
let convertAgeToString = String(age)
console.log(typeof convertAgeToString);


//task 11 Convert "123" (string) to number.
let convertStringToNumber = Number("123")


//task 12 Check if "abc" is NaN.
console.log(isNaN("abc"));

//task 13 Use parseInt("20px")
console.log(parseInt("20kd"));


//task 14 use parseFloat("3.14")
console.log(parseFloat("3.14"));


// task 15 Round a number using Math.round().
console.log(Math.round(9.6))

//task 16 Generate a random number between 1–10.
let randomNumber = Math.random(1 , 10)
randomNumber *= 10

console.log(Math.round( randomNumber));

//task 17 Find square root of 16 using Math.sqrt().
console.log(Math.sqrt(16));


//task 18 Check if a number is even or odd.
let oddOrEven = 11;
if(oddOrEven %2 ==0 ){
  console.log(`The given number ${oddOrEven} is Even `);

}else{
  console.log(`The given number ${oddOrEven} is odd `);
}



//task 19 Find the remainder of 10 / 3.
console.log(`Remainder of 10 is ${10%3}`);


//task 20 Concatenate two strings using template literals.

let concatenatedString = name +" " + caste
console.log(concatenatedString);
