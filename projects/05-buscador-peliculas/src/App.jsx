
import { useMovies } from './hooks/useMovies'
import { Movie } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

import './App.css'

function App () {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300), [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div>
      <h1>BUSCADOR DE PELICULAS</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search} type='text' placeholder='buscar peliculas' />
        <input type='checkbox' onChange={handleSort} checked={sort} />
        <button>Buscar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <main>
        {
        loading ? <p>Cargando...</p> : <Movie movie={movies} />
      }
      </main>
    </div>
  )
}

export default App
