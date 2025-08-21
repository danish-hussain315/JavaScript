const tinder = new Object()

console.log(tinder);
tinder.id = "123"
tinder.username  = "Danish"
tinder.isLoggedIn = false

const regularUser ={
  email : "danish@gmail.com",
  fullname : {
    userFullName : {
      firstname : "Danish",
      lastName : "Hussain"
    }
  }
}


const obj1 = {1: "a", 2 : "2"}
const obj2 = {5: "4", 4 : "5"}
let obj3 = Object.assign( obj1, obj2)
console.log(obj1);


console.log(obj3);
console.log(obj1 === obj3);

