import { createContext, useState } from 'react'

// CREAR EL CONTEXTO
// Y LO CONSUME EN EL CUSTOM HOOK: useFilters.JS
export const FilterContext = createContext()

// CREAR EL PROVIDER PARA PROVEER EL CONTEXTO EN EL main.JSX
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}
