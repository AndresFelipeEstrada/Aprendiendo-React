import { useFact } from './src/hooks/factHook'
import { useImage } from './src/hooks/imageHook'

export const App = () => {
  const { fact, newFact } = useFact()
  const { image } = useImage({ fact })

  const handleClick = () => {
    newFact()
  }

  return (
    <>
      <h1>App de perros</h1>

      <button onClick={handleClick}>ACTUALIZAR</button>

      {
        fact && <p>{fact}</p>
      }
      {
        image && <img src={image} alt='dog ramdom image' />
      }
    </>
  )
}
