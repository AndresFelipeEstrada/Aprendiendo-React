import { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // verificar si el producto ya esta en el carrito
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    // si el producto ya esta en el carrito
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // si el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (

    <cartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </cartContext.Provider>

  )
}
