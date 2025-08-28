/* let arr = [3, 4, 5, 6, 4]

// Using for of Loop on array
for (const element of arr) {
  console.log(element);
  
}

//using for of on String
let greeting  = "Danish Hussain !"
for (const greet of greeting) {
  console.log(greet);
  
} */





let map = new Map()
map.set(1 , "Danish")
map.set(2 , "Jam")
map.set("1" , "Danish")
map.set(1 , "Danish Hussain")


console.log(map);
// Maps accessed by Loop and proofing itreatable
for (const key of map) {
  // console.log(key[1]);
  
}


for (const [key, value] of map) {                 // using destructuring
  console.log(key);
  
}