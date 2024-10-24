// Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
// Reference: https://www.w3schools.com/js/js_promise.asp

// Promise Maker
// Creating a Promise: Alice make promise to Bob to make a cake tommorrow, 
// Outcome posibilities: 
//    Success: Alice deliver a cake that she promise.
//    Failour: Alice might not be able to make the cake for some reason.
let isConnectedToDB

let alicPromiseBakingCake = new Promise(function(resolve, reject){
   // Trying to connect to DB
   // It take time
   isConnectedToDB = true
   if (isConnectedToDB == true) {
    resolve("Connected to DB")
   } else {
    reject ("Error")
   }
} )



