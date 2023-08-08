import { useContext } from 'react'
import { cartContext } from '../context/cart'

export const useCart = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  } = useContext(cartContext)

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart
  }
}
