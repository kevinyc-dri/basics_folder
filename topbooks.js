/*
Write a function that takes an array of objects, books, and
returns a new array of topBooks where books.rating >= 4.25
*/

let books = [
  { name: 'Love and Other Pranks', rating: 3.0 },
  { name: 'Clean Code', rating: 4.8 },
  { name: 'How to Win a Hackathon', rating: 5.0 },
]

function returnTopBooks(books) {
  return topBooks = books.filter((book) => book.rating >= 4.25)
}

function returnTopBooksLongWay(books) {
  let topBooks = []
  for (let i = 0; i < books.length; i++) {
    if (books[i].rating >= 4.25) {
      topBooks.push(books[i])
    }
  }
  return topBooks
}

console.log(returnTopBooks(books))
console.log(returnTopBooksLongWay(books))


