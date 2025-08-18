//task 31 Create an array of 5 numbers.
let numberArray = [11 , 2 , 3 , 4 , 5]

//task 32 Find length of the array.
console.log(`Lenght of the Array ${numberArray.length}`);


//task 33 Access the first element.
console.log(`First element of the array ${numberArray[0]}`)


//task 34 Access the last element.
console.log(`First element of the array ${numberArray[numberArray.length -1]}`)


//task 35 Add an element at the end (push).
numberArray.push(90)
console.log(numberArray);

// task 36 Remove last element (pop).
numberArray.pop()
console.log(numberArray);

//task 37 Add an element at the start (unshift).
numberArray.unshift(99)
console.log(numberArray);

//task 38 Remove first element (shift).
numberArray.shift()
console.log(numberArray);


//task 39 Check if a value exists using includes.
if(numberArray.includes(6)){
  console.log("yes");
  
}else{
  console.log("No");
  
}

//task 40 Find index of an element.
console.log(numberArray.indexOf(4));


//task 41 Sort an array of numbers. sort method work on the strings for Number use sort((a,b) => a-b)

console.log(numberArray.sort((a,b) => a-b));


//task 42 Reverse an array.
console.log(numberArray.reverse());


// task 43 Join array into a string.
console.log(numberArray + " Danish");

//task 44 Slice first 3 elements.
 numberArray = [11 , 2 , 3 , 4 , 5]
console.log(numberArray.slice(2, 3));

