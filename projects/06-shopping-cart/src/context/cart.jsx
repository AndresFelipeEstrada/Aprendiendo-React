import { createContext, useState } from 'react'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // averiguamos si el carrito esta vacio
    const cartIndex = cart.findIndex(item => item.id === product.id)

    // Si el carrito ya esta en el carrito
    if (cartIndex >= 0) {
      const newProduct = structuredClone(cart)
      newProduct[cartIndex].quantity += 1
      return setCart(newProduct)
    }

    // Si el carrito esta vacio
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }
  const removeFromCart = (product) => {
    setCart(prevState => cart.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }
  return (
    <cartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
