import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <>
      <h1>App de Perritos</h1>
      <button onClick={handleClick}>ACTUALIZAR</button>
      {
        fact && <p>{fact}</p>
      }

      {
        image && <img src={image} alt='ramdom dog image' />
      }
    </>
  )
}
