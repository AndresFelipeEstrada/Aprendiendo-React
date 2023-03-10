import { useEffect, useRef, useState } from 'react'

export const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === ''
    }

    if (search === '') {
      setError('La busqueda no puede estar vacia')
    }

    if (search.match(/^\d+$/)) {
      setError('La busqueda no puede contener numeros')
      return
    }

    if (search < 2) {
      setError('La busqueda debe tener al menos 2 caracteres')
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}
