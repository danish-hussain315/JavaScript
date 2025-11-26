/* //Production and Consuming Seperately
let promiseOne =  new Promise(function(resolve , reject){                 // Promise Production
  setTimeout(function(){
    console.log("Function Completed!");
    resolve()
  },1000)
})

// Promise Consuming
promiseOne.then(function(){
  console.log("Fuction done through Then");
  
})



//Production and Consuming collectively
// During Production is Not Mandatory to assign Promise to the variable
new Promise(function(resolve , reject){                 
    setTimeout(function(){
    console.log("Function Completed!");
    resolve()
  },1000)
}).then(function(){                // Rapid Promise Consuming after Promise Production /Creation
  console.log("Fuction done through Then");
}) */


/* //Passing Value to Resolve
let promiseThree = new Promise((resolve, reject)=>{
  setTimeout(() =>{
    resolve({"username" : "Danish Hussain" , id : 123})
  },1000)
})


promiseThree.then((user) => {
  console.log(user['username']);
})
 */

/* 


let promiseFour = new Promise(function (resolve , reject){
  let checkUp = true
  if(!checkUp){
    reject("Reject is Called")
  }else{
    resolve({"username" : "Danish Hussain" , id : 123})
  }
})

promiseFour.then(function(user){            //return statement in 
  console.log("User From FirstChain ", user);       
  return user["username"]                   // this return cannot be returned to variable
})                                        // It will return to the next then Chaining Concept
.then((username) => {
  console.log("UserName From Second Then" , username);
  
})
.catch((msg)=>{
  console.log(msg);
}) */




/* const promiseFive = new Promise(function (resolve , reject){
  setTimeout(function(){
    let checkUp = true
  if(checkUp){
    resolve({"username" : "Danish Hussain" , id : 123})
  }else{
    reject("Reject is Called")
  }
  },1000)
  
})


async function ConsumePromiseFive() {                              // please apply try catch block for the reject result
  let promiseFiveReturned = await promiseFive
  console.log(promiseFiveReturned);
}

ConsumePromiseFive() */



async function async_await() {
  fetch("")
}