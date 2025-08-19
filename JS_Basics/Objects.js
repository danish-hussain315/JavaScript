
// task 56 Create an object {name: "Ali", age: 25}. 
let my_obj = {name: "Ali", age: 25}

//task 57 Access object property with dot notation.
console.log(my_obj.age);
console.log(my_obj.name);

//task 58 Access property with bracket notation.
console.log(my_obj["name"]);


//task 59 Add a new property to object.
my_obj.experience = "2 years"
console.log(my_obj.experience);


// task 60 Delete a property.
// delete my_obj.name
console.log(my_obj);

// task 61 Check if a property exists (in).
console.log("age" in my_obj);


//task 62 Use Object.keys(obj).

let keys = Object.keys(my_obj)
console.log(keys);


//task 63 Use Object.values(obj).
let valuess = Object.values(my_obj)
console.log(valuess);


//task 64 Use Object.entries(obj).
let entry = Object.entries(my_obj)
console.log(entry);
