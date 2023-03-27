export const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <>
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> -$ {price * quantity}
        </div>
        <footer>
          <small>
            Cantidad : {quantity}
          </small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    </>
  )
}
