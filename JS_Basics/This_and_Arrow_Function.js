let user =  {
  username : "Danish Hussain",
  price : 999,
  welcomeMessage : function() {
    console.log(`Hi, ${this.username}, Welocme to the Website`);
    console.log(this)   // here it will return the whole object with funtion delceration not whole funtion just name
    
  }
}

user.welcomeMessage()
user.username = "Ali"
user.welcomeMessage()


console.log(this);        // here this work as whole document so it return a empty object {}


function getDetailAboutThis(){           // here this gives object and tells there is something here
  let name  = "Danish"
  console.log(this.name);
  
}

getDetailAboutThis()



let arrowFunction = () => {             // agian give empty object in arrow function
  let name  = "Danish"
  console.log(this.name);
}

arrowFunction();

/*
let add = (num1 , num2) => {          // Explicit Arrow Function must uses the {} and return statement
  return  num1 +num2
}

console.log(add(4,14));



//Implicit Arrow Function most used in React 
let sub = (a , b) => a -b
console.log(sub(24 ,4));


let sub2Implicit = (a ,b) => (a-b)         // this santax is also used to return Object and arrays
console.log(sub2Implicit(28 ,4));


*/