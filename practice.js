/*
Write a function that takes an array of objects, movies, and
returns a new array of topMovies where movie.rating >= 4.25
*/
const movies = [
  { name: 'The Dark Knight', rating: 5.0 },
  { name: 'Star Wars', rating: 5.0},
  { name: 'Aladdin', rating: 3.0},
]

function topRatedMovies(movies) {
  return movies.filter(movie => movie.rating >= 4.25)
}

console.log(topRatedMovies(movies))


function returnTopMoviesLongWay(movies) {
  const topMovies = []
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating >= 4.25) {
      topMovies.push(movies[i])
    }
  }
  return topMovies
}

console.log(returnTopMoviesLongWay(movies))

