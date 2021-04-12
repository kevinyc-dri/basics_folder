function returnTopBooks(books) {
  return topBooks = books.filter((book) => book.rating >= 4.25)  
}

// Write a function that takes an array of objects, books, and returns a new array of topBooks where books.rating >= 4.25
function returnTopBooks(books) {
  let topBooks = []
  for (let i = 0; i < books.length; i ++) {
    if(books[i].rating >= 4.25) {
      topBooks.push(books[i])
    }
  }
  return topBooks
}

function returnTopBooks(books) {
  for (let i in books) {
    console.log(i >= books[i])
  }
}
