(function  newFunction(){                    // IIFE in Normal function
  console.log("IIFE");                        // also called named IIFE
  
})();

(() => {                                        //IIFE with the arrow function 
  console.log("From Arrow function")
})();


((valuess) => {                                 // passing the values to the arrow function IIFE
  console.log("From Arrow function" , valuess)
})("Danish")