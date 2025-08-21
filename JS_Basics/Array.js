let myArr = [1, 2, 3, 4, 5 , 6 , "Danish"]

console.log(myArr);


let myHeros = ["Danish", "shaktiman"]



myArr.push("Hussain")
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(10)   //add at start
myArr.shift()      //remove from start


console.log(`Print the orignial Array`);
console.log(myArr);

let slicedArray = myArr.slice()
console.log(`Sliced Array ${slicedArray}`);

slicedArray.push("10")
console.log(slicedArray);
console.log(`Print the orignial Array after using slice() method`);
console.log(myArr);



let splicedArray = myArr.splice(1, 2)
console.log(`Spliced Array ${splicedArray}`);
console.log(splicedArray);

console.log(`Print the orignial Array after using splice() method`);
console.log(myArr);