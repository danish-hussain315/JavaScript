
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


//task 65 Loop through object with for...in.
for(key in my_obj){
  console.log(`the value of ${key +` is `+ my_obj[key]}`);
  
}

// task 66 Clone object using spread {...obj}.

let newMyObject = {...my_obj}
console.log(newMyObject);


// task 67 Nested object access.
let newObject = {
  name: "Danish Hussain",
  age : 25,
  address : {
    colony : "Al Syed colony",
    near : "DMC Office",
    road : "Badh Road"
  }
}

console.log(newObject.address.road);


// task 68 Freeze an object (Object.freeze).
Object.freeze(my_obj);
console.log(Object.isFrozen(my_obj))


//task 69 Seal an object (Object.seal).
Object.seal(my_obj)



//task 70 Merge two objects with Object.assign.
let mergedObject =  Object.assign({}, my_obj , newMyObject)
console.log(mergedObject);



//task 71 Check object type using typeof.
console.log(typeof my_obj);


//task 72 Create an array of objects (students).
let students = [
  {name : "Danish"},
  {name : "Hussain"}
]



//task 73 Find object by property in array.
let seacrhedByProperty = students.find(student => student.name === "Danish")
console.log(seacrhedByProperty)

//task 74  . Update object property inside array.
seacrhedByProperty.name = "Zahid"
seacrhedByProperty.age = 25

console.log(seacrhedByProperty);

// task 75 Delete object from array.
students.shift()
console.log(students);


