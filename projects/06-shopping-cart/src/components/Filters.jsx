import './filters.css'

import { useId } from 'react'
import { useFilter } from '../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilter()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (e) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Filtrar por precio:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='2000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='home-decoration'>Home-decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </div>
    </section>
  )
}
