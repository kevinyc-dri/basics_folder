// let person = {
//   firstName: 'Nikk',
//   age: 27,
//   awesome: true,
//   hometown: 'Portland',
// }
// // destructuring

// function sayHi(person) {
//   const {firstName, age} = person
//   console.log(`Hello ${firstName} Today, you are ${age} years young.`)
  
// }

// sayHi(person)

// let { firstName, age, awesome } = person

// // let firstName = person.firstName
// // let age = person.age
// // let awesome = person.awesome

// for (let i = 0; i < 10; i++) {
//   console.log("This is a loop # ", i)
// }

let person = {
  firstName: 'Todd',
  age: 45,
  awesome: true
}

for (let i in person) {
  console.log(i + ' = ' + person[i])
}
