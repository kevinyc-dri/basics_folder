setTimeout(() => { console.log('...Middle...') }, 1000)
setTimeout(() => { console.log('...2ndMiddle...') }, 2000)

console.log('...Finish')
console.log('Start...')

const fs = require('fs')
const data = fs.readFileSync('/file.json')
// blocks here until file is read (syncronous)

const fs = require('fs')
const { Server } = require('node:http')
const data = fs.readFile('/file.json', (err, data) => {
  if (err) throw err
})
// Non-blocking (asynchronous)

function getName(callback) {
  let name = prompt('Enter your name: ')
  callback(name)
}
getName((name) => console.log('Hello ' + name))

function makeBurger() {
  let beef = getBeef()
  let patty = cookBeef(beef)
  let buns = getBuns()
  let burger = putBeefBetweenBuns(buns, patty)
  return burger
}

let burger = makeBurger()
serve(burger)

// -----------------------------------------------------
function makeBurger() {
  return getBeef()
    .then(cookBeef)
    .then(getBuns)
    .then(putBeefBetweenBuns)
}

makeBurger().then(serve)

// ----------------------------------------------------

chooseToppings() 
  .then(function(toppings) {
    return placeOrder(toppings)
  })
  .then(function(order) {
    return pickupOrder(order)
  })
  .then(function(pizza) {
    return eat(pizza)
  })
  .catch(function(err) {
    return failureCallback(err)
  })

  chooseToppings()
    .then(toppings => placeOrder(toppings))
    .then(order => pickupOrder(order))
    .then(pizza => eat(pizza))
    .catch(err => failureCallback(err))

  chooseToppings()
    .then(placeOrder)
    .then(pickupOrder)
    .then(eat)
    .catch(failureCallback)  

