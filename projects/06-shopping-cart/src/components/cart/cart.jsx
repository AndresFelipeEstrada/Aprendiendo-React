import './cart.css'

import { ClearCartIcon, CartIcon } from '../icons/Icons'

import { useCart } from '../../hooks/useCart'
import { useId } from 'react'

export const Cart = () => {
  const { cart, clearCart, addToCart } = useCart()

  const cartId = useId()

  return (
    <>
      <label htmlFor={cartId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartId} hidden />

      <aside className='cart'>
        {cart.length > 0
          ? <ul>
            {cart.map(product => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <footer>
                  <small>Quantity: {product.quantity}</small>
                  <strong>
                    Total : {product.price * product.quantity}
                  </strong>
                  <button onClick={() => addToCart(product)}>+</button>
                </footer>
              </li>
            ))}
          </ul>
          : <p className='empty-cart'>El carrito esta vacio</p>}

        <div className='clear-button'>
          <button onClick={clearCart}> <ClearCartIcon /> </button>
        </div>

      </aside>

    </>
  )
}
