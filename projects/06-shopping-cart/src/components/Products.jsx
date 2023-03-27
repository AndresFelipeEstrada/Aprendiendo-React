import './products.css'

import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

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
          const botonColor = isProductInCart ? 'red' : '#09f'
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <h3>{product.title} </h3> - <span>${product.price}</span>
              </div>
              <button
                style={{ backgroundColor: botonColor }}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
              >
                {
                  isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                }
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
