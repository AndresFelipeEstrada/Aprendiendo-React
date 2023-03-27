import { products as InitialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'
import { useFilter } from './hooks/useFilters'
import { CartProvider } from './context/cartContext'

export const App = () => {
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(InitialProducts)

  return (

    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>

  )
}
