import { useState } from 'react'

import { Products } from './components/Products'
import { products as InitialProducts } from './mocks/products.json'

function App () {
  const [products] = useState(InitialProducts)

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
         (filters.category === 'all' ||
          product.category === filters.category)
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return (
    <>
      <h1>Shopping Cart</h1>
      <Products products={filteredProducts} />
    </>
  )
}

export default App
