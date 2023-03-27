import { useId } from 'react'
import { useFilter } from '../hooks/useFilters'
import './filters.css'

export const Filters = () => {
  const { filters, setFilters } = useFilter()

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
    <section className='filters'>

      <div>
        <label htmlFor={priceId}>Precio a partir de :</label>
        <input type='range' id={priceId} onChange={handleChangeMinPrice} value={filters.minPrice} min='0' max='2000' />
        <span>{filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryId}>Categoria</label>
        <select id={categoryId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value='home-decoration'>Home Decoration</option>
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
