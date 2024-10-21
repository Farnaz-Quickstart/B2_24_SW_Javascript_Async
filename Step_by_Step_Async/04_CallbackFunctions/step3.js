// Callback Function: A function that is passed as an argument to another function 
// and is executed after that function completes its task.

// Usage: Handle asynchronous operations such as:
//        - Reading a file
//        - Network requests (e.g., API calls)
//        - Interacting with a database

// Description: Once the asynchronous operation is complete, the callback function is invoked.

// Lets think, completing first function takes time
// setTimeout: Ii a JavaScript function that lets us execute a piece of code after a specified amount of time has passed.
// setTimeout(functionRef, delay)

function hello (callback) {
  setTimeout(() => {
    console.log ("Hello!");
    callback()
  }, 3000);

}

function howAreYou() {
  console.log ("How are you?!");
}

// hello(howAreYou)

// or

hello(()=>{
  howAreYou()
})




