let marvel_heros = ["thor", "IronMan", "spiderman"]
let dc_heros = ["superman" , "flash", "batman"]


// console.log(`Push array into array`);
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);



let all_heros = marvel_heros.concat(dc_heros)
console.log("All heros after using Concat", all_heros);

let all_herosUsingSpreadOperator = [...marvel_heros , ...dc_heros]
console.log("All heros after using Spread ", all_herosUsingSpreadOperator);


let newArray = [1, 2, [3,4,5] , 6 , [7 ,8, [9,10]]]
console.log("Flatten the Array ", newArray.flat(1));

console.log(Array.isArray(newArray));
console.log(Array.from("Danish"));
console.log(Array.from({name : "Danish"}));  // It will return empty object

let svore1 = 0
let score2 = 2
console.log(Array.of(svore1, score2));

