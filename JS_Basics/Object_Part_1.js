
let mySym =  Symbol("my_Keyword")

const JSUser = {
  name : "danish",
  age : 24,
  [mySym] : "Hello to demo of Symbol",
  location : "Nasirabad",
  email : "danishhussain315@gmail.com",
  isLoggedIn : false,
  lastLoginDay : ["Monday", "Tuesday"]
}

console.log(`Printing the name from Object ${JSUser["name"]}`);
console.log( typeof JSUser[mySym]);
console.log(JSUser);



JSUser.greeting = function(){
  console.log(`Function in Object`);
  // return "Danish"
}

JSUser.getName = function(){
  console.log(`Name Stored in Object ${this.name}`);
}

let greet = JSUser.greeting()
console.log(greet);
console.log(JSUser.getName());



