function hello (callback1) {
  console.log("Hello!");
  callback1()
}

function howAreYou(callback2) {
  console.log("How are you!");
  callback2()
}

function howIsSchool(callback3) {
  console.log("School is going well!");
  callback3()
}

function goodbye() {
  console.log("Goodbye!");
}


hello(()=> {
  howAreYou(()=>{
    howIsSchool(()=>{
      goodbye()
    });
  })
})
