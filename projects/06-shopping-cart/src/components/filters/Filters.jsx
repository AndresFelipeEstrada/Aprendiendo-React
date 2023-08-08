import './filters.css'

import { useId } from 'react'
import { useFilters } from '../../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()

  const priceId = useId()
  const categoryId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <>
      <div className='filters'>
        <div>
          <label htmlFor={priceId}>Precio:</label>
          <input
            type='range'
            min='0'
            max='2000'
            id={priceId}
            value={filters.minPrice}
            onChange={handleChangeMinPrice}
          />
          <span>{filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryId}>Categoria</label>
          <select id={categoryId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value='home-decoration'>Home-decoration</option>
            <option value='laptops'>laptops</option>
            <option value='smartphones'>smartphones</option>
            <option value='fragrances'>fragrances</option>
            <option value='skincare'>skincare</option>
            <option value='groceries'>groceries</option>
          </select>
        </div>

      </div>
    </>
  )
}
