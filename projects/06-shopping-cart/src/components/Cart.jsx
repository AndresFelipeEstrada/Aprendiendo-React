import './cart.css'

import { CartIcon, ClearCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import { useId } from 'react'
import { CartItem } from './CartItem'

export const Cart = () => {
  const cartCheckBoxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label htmlFor={cartCheckBoxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type='checkbox' hidden />

      <aside className='cart'>
        {
        cart.length > 0
          ? <ul>
            {cart.map(product => (
              <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
              />
            ))}
          </ul>
          : <p className='empty-cart'>El carrito esta vacio</p>
          }

        <div className='clear-button'>
          <button onClick={clearCart}> <ClearCartIcon /> </button>
        </div>
      </aside>

    </>
  )
}
