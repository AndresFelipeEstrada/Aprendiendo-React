import { AddToCartIcon, RemoveFromCartIcon } from '../icons/Icons'
import { useCart } from '../../hooks/useCart'

import './products.css'

export const Products = ({ products }) => {
  const { cart, addToCart, removeFromCart } = useCart()

  const productInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = productInCart(product)
          const boton = isProductInCart ? 'red' : '#09f'
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <span>${product.price}</span>
              <button
                style={{ backgroundColor: boton }}
                onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
              >
                {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
