const a = 7
let b = a

function changePrimitive(x) {
  x = 100 
  console.log("inside function (primitive):", x)
}

b = 8
changePrimitive(b)

console.log("primitive:", a, b) 


const c = {
  course: "TS",
  changeCourse(newName) {
    this.course = newName
  }
}

const d = c

function changeObject(obj) {
  obj.course = "JS",
  obj.changeCourse("NodeJS")
}

changeObject(d)

console.log("object reference:", c, d)



const e = {
  course: "TS",
  changeCourse(newName) {
    this.course = newName
  }
}

let f = e

function replaceObject(obj) {
  obj = { course: "Python" } 
  obj.course = "Java" 
  console.log("inside function (new object):", obj)
}

replaceObject(f)

console.log("new object assignment:", e, f)



function tricky(obj) {
  obj.changeCourse("C++") 
  obj = { course: "Rust" }
}

tricky(f)

console.log("after tricky:", e, f)