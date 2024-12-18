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

function startScript () {
  setTimeout(() => {
    console.log ("Connecting to  Database")
  }, 4000);

}

function endScript () {
  console.log ("showing data from database")
}

startScript()
endScript()






