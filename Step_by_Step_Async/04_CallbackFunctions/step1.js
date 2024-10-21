// Callback Function: A function that is passed as an argument to another function 
// and is executed after that function completes its task.

// Usage: Handle asynchronous operations such as:
//        - Reading a file
//        - Network requests (e.g., API calls)
//        - Interacting with a database

// Description: Once the asynchronous operation is complete, the callback function is invoked.

// Step1:
function hello () {
  console.log ("Hello!");
}


function howAreYou() {
  console.log ("How are you!");
}


hello()
howAreYou();

