
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { useFilter } from './hooks/useFilters'
import { products as InitialProducts } from './mocks/products.json'

function App () {
  const { filtersProducts } = useFilter()

  const filteredProducts = filtersProducts(InitialProducts)

  return (
    <>

      <Header />
      <Products products={filteredProducts} />
      <Footer />

    </>
  )
}

export default App
