// Task 21 Find length of a string "JavaScript".

let word = "JavaScript"

console.log(`Lenght of the word ${word.length}`);


//task 22 Convert "hello" to uppercase.
word = "hello"
console.log(`Word in to Upper case ${word.toUpperCase()}`);

//task 23 Convert "WORLD" to lowercase.
word = "WORLD"
console.log(`Word in to Upper case ${word.toLowerCase()}`);


//task 24 Extract "Java" from "JavaScript".

word = "JavaScript"
console.log(word.substring(0,4));


// task 25 Check if "apple" includes "app".
let fruit = "apple"
if(fruit.includes("app")){
  console.log("Yes includes app");
  
}


//task 26 Replace "JS is hard" → "JS is easy".
let wordToReplace = "JS is hard"
let replacedWord = wordToReplace.replace("hard","easy")
console.log(replacedWord);


//task 27 Trim spaces from " hello ". trim is used to remove outer spaces
word = "hello "
console.log(`Trimed word${word.trim()}`);



//task 28 Split "a,b,c" into an array.
let wordToSplit = "a,b,c"
let splitedArray = wordToSplit.split(",")
console.log(splitedArray);


//task 29 Get character at index 2 of "hello".
console.log(`Character at 2nd index ${word[2]}`);

// task 30 Reverse a string.
console.log(splitedArray.reverse());
