// function isLegalDrinkingAge(age) {
//   const isOfAge = age >= 21
//   return isOfAge
// }

// console.log(isLegalDrinkingAge(18))
// console.log(isLegalDrinkingAge(21))
// console.log(isLegalDrinkingAge(34))

// Write a function that outputs a message
// if a customer is 18 or over, it ouputs
// 'Welcome to Club Boca.' Otherwise it outputs
// 'Scram, kid. Come back when you're 18.'

function isLegalAge(age) {
  if (age >= 18) {
    console.log('Welcome to Club Boca.')
  } else {
    console.log('Scram, kid. Come back when youre 18.')
  }
}

isLegalAge(21)

function isOfage(age) {
  const message = (age >= 18)
    ? 'Welcome to Club Boca.'
    : 'Scram, kid. Come back when youre 18.'
  console.log(message)
}

isOfage(7)
