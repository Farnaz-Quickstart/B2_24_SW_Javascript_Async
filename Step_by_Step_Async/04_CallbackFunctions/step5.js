function hello(callback) {
  setTimeout(() => {
    console.log ("hello")
    callback()
  }, 3000);
}


function howAreYou () {
  console.log ("how are you?")
}

hello(howAreYou)


function func1(parameter1) {
  console.log ("func1")
  console.log
}

function func2() {
  console.log ("func2")
}


