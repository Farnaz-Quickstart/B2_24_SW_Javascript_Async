// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Reference: https://www.w3schools.com/js/js_promise.asp

// Promise Maker
// Creating a Promise: Alice make promise to Bob to make a cake tommorrow, 
// Outcome posibilities: 
//    Success: Alice deliver a cake that she promise.
//    Failour: Alice might not be able to make the cake for some reason.

let alicPromiseBakingCake = new Promise(function(resolved, rejected){

  cakeBaked = false;
  if (cakeBaked) {
    resolved ("Cake is ready")
  } else {
    rejected ("Sorry, no cake today.")
  }
})

