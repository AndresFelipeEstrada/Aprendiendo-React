import { products as initialProducts } from './mocks/products.json'

import { Products } from './components/products/Products'
import { Header } from './components/header/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/footer/Footer'
import { CartProvider } from './context/cart'
import { Cart } from './components/cart/cart'

export function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  )
}
