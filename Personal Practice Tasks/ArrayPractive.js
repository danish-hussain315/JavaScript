//task 31 Create an array of 5 numbers.
let numberArray = [11 , 2 , 3 , 4 ,4 , 5]

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
console.log(numberArray.slice(-4 , 2));

//task 45 Splice array to remove 2 elements.
numberArray = [11 , 2 , 3 , 4 ,4 , 5]
// console.log(numberArray.splice(0,2));

console.log(numberArray);


//task 46 Use map to double each number.
let newArray = numberArray.map(numberArray => numberArray*2)
console.log(newArray);

//tasl 47 Use filter to keep even numbers.
let evenFilteredArray = numberArray.filter(numberArray => numberArray%2 ===0)
console.log(evenFilteredArray);


//task 48 Use reduce to find sum.
let reduceSum = numberArray.reduce((sum, current) => sum + current , 0)
console.log(reduceSum);


//task 49 Find the max number in an array.
let maximumNumber = Math.max(...numberArray)
console.log(maximumNumber);


//task 50 Find the min number in an array.
let manimumNumber = Math.min(...numberArray)
console.log(manimumNumber);


//task 51 Flatten a nested array (flat).
let arr = [1, 2, [3, 4], 5];

let flatArr = arr.flat();

console.log(flatArr);

//task 52 Merge two arrays with concat.
console.log(newArray.concat(numberArray));

//task 53 Spread operator [...arr1, ...arr2].
let mergedArray = [...numberArray, ...newArray]
console.log(mergedArray);

//task 54 Check if variable is an array.
console.log(Array.isArray(numberArray));


//task 55 Remove duplicates using Set.
let sets = [...new Set(numberArray)]
console.log(sets);
