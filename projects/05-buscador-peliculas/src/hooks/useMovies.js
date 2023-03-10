import { useCallback, useMemo, useRef, useState } from 'react'
import { movieFetch } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const busquedaAnterior = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === busquedaAnterior.current) return

    try {
      setLoading(true)
      busquedaAnterior.current = search
      const newMovie = await movieFetch({ search })
      setMovies(newMovie)
    } catch (error) {
      setError('Error al obtener peliculas')
    } finally {
      setLoading(false)
      setError(null)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, setMovies, getMovies, loading }
}
