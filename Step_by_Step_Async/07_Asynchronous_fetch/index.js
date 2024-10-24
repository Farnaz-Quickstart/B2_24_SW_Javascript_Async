// Async: Make function to return promise
// await: Wait for the promise
// api: https://jsonplaceholder.typicode.com/users

 async function fetchApi () {
  let response = await  fetch ("https://jsonplaceholder.typicode.com/users")
  let data = await response.json()
  console.log (data)
 }

