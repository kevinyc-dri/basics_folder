/* 
print each number 
if num is divisible by 3 print fizz
if num is divisible by 5 print buzz
if num is divisible by both 3 and 5 print fizzbuzz
*/

// function fizzBuzzDrinkingGame(x) {
//   for (let i = 0; i < 20; i++) { 
//     if (i % 15 === 0) { // I still don't get why this has to come first
//       console.log('Fizzbuzz')
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     }
//   }
// }

// return fizzBuzzDrinkingGame(1)

// after googling -------------------------------------------------------------------
// function fizzBuzzDrinkingGame() {
//   for (let i = 0; i < 100; i++) {
//     if (i % 15 === 0) { // I still don't get why this has to come first
//       console.log('Fizzbuzz') // how do i do it with return
//     } else if (i % 3 === 0) {
//       console.log('Fizz')
//     } else if (i % 5 === 0) {
//       console.log('Buzz')
//     } else {
//       console.log(i)
//     }
//   }
// }
// return fizzBuzzDrinkingGame()

// function fizzBuzzDrinkingGame() { // want to understand
//   for (let i = 0; i < 100;) {
//     console.log((++i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
//   }
// }
// return fizzBuzzDrinkingGame()

// function fizzBuzzDrinkingGame() {
//   for (let i = 0; i < 100; i++) {
//     let msg = i
//     if (i % 3 === 0) msg += '-fizz'
//     if (i % 5 === 0) msg += '-buzz'
//     console.log(msg)
//   }
// }

// fizzBuzzDrinkingGame()

for (let i = 0; i <= 100; i++) {
  // print each number
  // if number is divisible by 3, print FIZZ
  // if number is divisible by 5, print BUZZ
  // if number is divisible by 15, print FIZZBUZZ
  if (i % 3 && i % 5 === 0) {
    console.log('FIZZ BUZZ')
  } else if (i % 3 === 0) {
    console.log('FIZZ')
  } else if (i % 5 === 0) {
    console.log('BUZZ')
  } else 
    console.log(i)
}

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('FIZZ')

  } else if (i % 5 === 0) {
    console.log('BUZZ') 

  } else if (i % 3 && i % 5 === 0) {
    console.log('FIZZ BUZZ')

  } else
    console.log(i)
}

// for (let i = 1; i <= 100; i++) {
//   console.log((i % 3 === 0 && i % 5 === 0)
//     ? 'FIZZ BUZZ'
//     : (i % 3 === 0)
//       ? 'FIZZ'
//       : (i % 5 === 0)
//         ? 'BUZZ'
//         : i)
// }

// for (let i = 1; i <= 100; i++) {
//   let msg = ' '
//   if (i % 3 === 0) {
//     msg += 'FIZZ '
//   }
//   if (i % 5 === 0) {
//     msg += 'BUZZ'
//   }
//   console.log(i,msg)
// }









