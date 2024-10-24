// A synchronous Senario: Api Connection
// API: https://jsonplaceholder.typicode.com/users
// 1- Is connected to Api --> Promise Resolve --> then after that do something
// 2- Is NOT connected to Api -- Promise Reject --> catch error

// Steps 1: Connect to API

let p1 = fetch ('https://jsonplaceholder.typicode.com/users')


fetch ('https://jsonplaceholder.typicode.com/users')
  .then((response)=>{  return response.json()})
  .then ((data)=>{console.log (data)})
