// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Reference: https://www.w3schools.com/js/js_promise.asp

// Promise Maker
// Creating a Promise: Alice make promise to Bob to make a cake tommorrow, 
// Outcome posibilities: 
//    Success: Alice deliver a cake that she promise.
//    Failour: Alice might not be able to make the cake for some reason.

let alicPromiseBakingCake = new Promise(function(resolved, rejected){

  cakeBaked = true;
  if (cakeBaked) {
   
    resolved ([1,2,3])    
  } else {
    rejected ("Sorry, no cake today.")
  }
})

// Promise Reciver
// Bob response:
//   1- Pending: Bob wating for the cake
//   2- Fullfill: If Alice delivers the cake, Bob will be happy and enjoy the cake.
//   3- Rejected: If Alice fails to deliver the cake, Bob will be disappointed.

alicPromiseBakingCake
  .then ((cake)=>{console.log (cake)})
  .cathch ((error)=>{console.log (error)})