import './products.css'

export const Products = ({ products }) => {
  return (
    <main className='products'>
      <ul>
        {
          products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <span>{product.tittle} - ${product.price}</span>
            </li>
          ))
    }
      </ul>
    </main>
  )
}
