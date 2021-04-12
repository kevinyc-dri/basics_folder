let fruit = {
  name: 'banana',
  qty: 12,
  price: 2.49
}

function getFruitColor(fruitName) {
  switch (fruitName) {
    case 'apple':
      return 'red'
    case 'banana':
    case 'lemon':
      return 'yellow'
    case 'pear':
      return 'green'
    case 'mango':
      return 'orange'
    default:
      return 'unknown';
  }
}

console.log(getFruitColor('mango'))

