import { useContext } from 'react'
import { FilterContext } from '../context/filters'

export const useFilter = () => {
  const { filters, setFilters } = useContext(FilterContext)

  const filtersProducts = (products) => {
    return (
      products.filter((product) => {
        return (
          product.price >= filters.minPrice && (
            filters.category === 'all' ||
                filters.category === product.category
          )
        )
      })
    )
  }

  return { filters, setFilters, filtersProducts }
}
