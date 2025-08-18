// here I learned about the spaces mangement

/*

Primitive and Non Primitive 

Primitive 
  Primitives are imutable and stored Value
  *it can not and changed or assigned to another value when we 
    assign it then new copy will be assigned   in memory location 

    
    Example
let str = "Hello";
str[0] = "h";   // ❌ this will not change the string
console.log(str[0]); // "Hello"

*/

/*
Non Primitive DataTypes
Non-primitives (like objects, arrays) are stored by reference, not value.


Example
let obj1 = { name: "Ali" };
let obj2 = obj1;   // both point to the SAME object in heap

obj2.name = "Danish";

console.log(obj1.name); // "Danish"



*/


conclusion
Primitive: Stored directly in stack, copied by value, immutable.

Non-Primitive: Reference stored in stack, actual data in heap, mutable.

