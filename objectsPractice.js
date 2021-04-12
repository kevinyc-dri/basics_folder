const person = {
  firstName: 'Devin',
  lastName: 'Troy',
  age: 88,
  address: {
    city: 'Honololu',
    state: 'Hawaii',
    zip: '55555',
  },
  pets: ['😸', '🐶', '🎠'],
}

person.family = ['Mia', 'Annalee', 'Claudia', 'Cielo']
person.pets.push('🐠')
console.log(person)

// const myState = person.address.state
const  { address, age, pets } = person
// console.log(`my city ${address.city}, my zipcode ${address.zip}, and my age is ${age}`)

function getBirthYear(x){
  const thisYear = 2021
  const birthYear = thisYear - x

  // console.log(birthYear)
  return birthYear
}

pets.push('squid')

const myYear = getBirthYear(age)
// console.log('my birth year is ', myYear)

// get all keys of person
const allKeys = Object.keys(person)
const allValues = Object.values(person)
// console.log(allKeys)
// console.log('this is all the keys', person[allKeys[0]])
// console.log('this is all the keys', allKeys[0], ':', person[allKeys[0]])

console.log('these should be all the values ', allValues)

// person.firstName -> Devin
// person['firstName'] -> Devin
// person[allKeys[0]] -> Devin all the same