const HasMovies = ({ movies }) => {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h3>{movie.title}</h3>
            <p>{movie.type}</p>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        ))
            }
    </ul>
  )
}

const NotMovies = () => {
  return (
    <p>No se encontraron peliculas</p>
  )
}

export const Movie = ({ movie }) => {
  const hasMovie = movie.length > 0
  return (
    hasMovie ? <HasMovies movies={movie} /> : <NotMovies />
  )
}
