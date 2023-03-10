const API_KEY = '89822b2d'
const API_URI = `http://www.omdbapi.com/?apikey=${API_KEY}&`

export const movieFetch = async ({ search }) => {
  try {
    const response = await fetch(`${API_URI}s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      image: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error en la peticion fetch')
  }
}
