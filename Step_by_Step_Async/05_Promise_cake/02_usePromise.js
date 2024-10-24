// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Reference: https://www.w3schools.com/js/js_promise.asp

// Promise Maker
// Creating a Promise: Alice make promise to Bob to make a cake tommorrow, 
// Outcome posibilities: 
//    Success: Alice deliver a cake that she promise.
//    Failour: Alice might not be able to make the cake for some reason.

let alicPromiseBakingCake = new Promise(function(resolve, reject){

  let cakeBaked = true;
  if (cakeBaked) {
    resolve ("Cake is ready")
  } else {
    reject ("Sorry, no cake today.")
  }
})


alicPromiseBakingCake.then(function(data){
  console.log (data)
}).catch(function(error){
  console.log (error)
})
